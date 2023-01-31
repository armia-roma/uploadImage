<template>
    <div>
        <v-row>
            <v-col md="8">
                <v-file-input
                    @change="selectImage"
                ></v-file-input>
            </v-col>
            <v-col md="2">
                <v-btn @click="save">post</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="4">
                <v-text-field
                    outlined
                    dense
                    hide-details
                    label="Name"
                    v-model="image"
                ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
                <v-text-field
                    outlined
                    dense
                    hide-details
                    label="Price"
                    v-model="price"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-img
                    :src="`file:///home/petra/Documents/laravel/practice/Game/storage/app/9.png`"
                ></v-img>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-simple-table v-if="products">
                    <thead>
                        <tr>
                            <th>head</th>
                            <th>
                                name
                            </th>
                            <th>
                                extension
                            </th>
                            <th>
                                img
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in products" :key="product.id">
                            <td>
                                <v-btn icon>
                                    <v-icon>mdi-magnify</v-icon>
                                </v-btn>
                            </td>
                            <td>
                                {{product.image}}
                            </td>
                            <td>
                                <v-img 
                                    height="100"
                                    width="100"
                                    class="rounded"
                                    :src="`http://127.0.0.1:8000/api/image/${product.id}.${product.extension}`"
                                ></v-img>
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-col>
        </v-row>
        <v-row>   
            <v-col md="2" v-for=" (pre, index) in previewImages " :key="index">
                <v-sheet :color="pre.primary ? 'blue': null" rounded="">
                <v-hover v-slot:default="{ hover }">
                    <v-img
                    class="rounded"
                    clearable
                    width="150"
                    height="150"
                    :src="pre.src">
                        <v-overlay absolute :value="hover">
                            <v-btn icon @click="removeImage(index)">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                            <v-btn icon color="blue" @click="primaryImage({...pre, index})">
                                <v-icon>mdi-hexagram</v-icon>
                            </v-btn>
                        </v-overlay>                
                    </v-img>
                </v-hover>
                </v-sheet>
            </v-col>
            <v-col md="3">
                <v-hover>    
                    <v-card 
                        slot-scope="{hover}"
                        outlined  
                        @click="handleAddImage"
                        height="150" 
                        flat width="150" 
                        class="py-3"
                        rounded="">
                        <v-overlay absolute :value="hover">
                        </v-overlay>  
                        
                        <v-card-text >
                            <v-row justify="center"  align="center" >
                                <v-col cols="12" md="6" class="text-center">
                                    <v-icon large>
                                        mdi-camera
                                    </v-icon>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <p>click to add image</p>
                                    
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-col>
            
        </v-row>
        <v-row>
            <v-col>
                <v-btn color="primary" @click="sendUpload">
                    upload
                </v-btn>
            </v-col>
        </v-row>
        
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            currentImage : "",
            image: "",
            products: [],
            previewImage : null,
            previewImages : [],
            files: [],
            price: null
        }
    },
    methods: {
        selectImage(e) {
            console.log(e)
            this.currentImage = e
            this.previewImage = URL.createObjectURL(this.currentImage);
            console.log("pre", this.previewImage)
        },
        save() {
            let formData = new FormData()
            formData.append('file', this.currentImage)
            formData.append("image", this.image)
            axios.post('http://127.0.0.1:8000/api/upload', formData)
        },
        async fetchProduct() {
            let data = await axios.get('http://127.0.0.1:8000/api/images')
            this.products = data.data
        },
        handleAddImage() {
            let input = document.createElement('input');
            input.multiple = true;
            input.type = 'file';
            input.name = 'images';
            input.onchange = () => {
            // you can use this method to get file and perform respective operations
            let files =   Array.from(input.files);
            this.previewImages.push({ src:URL.createObjectURL(files[0]), primary: false, name: files[0].name })
            this.files.push(files[0])
            };
            input.click();
        },
        removeImage(e){
            this.files.splice(e, 1)
            this.previewImages.splice(e,1)
        },
        primaryImage(e){
            this.previewImages.forEach(i => i.primary = false)
            this.previewImages[e.index].primary = true
            let primary = this.files.find(file => file.name == e.name)
            console.log(primary)
        },
        format() {
            // let files = []
            let formData = new FormData()
            for (let i = 0; i < this.files.length; i++) {
                formData.append(this.files[i].name, this.files[i])
            }
            return formData
        },
        sendUpload() {
            // let files = this.format()
            // let files = [];
            // let formData = new FormData()
            // for (let i = 0; i < this.files.length; i++) {
            //     this.files[i].des = "image"
            //     formData.append(this.files[i].name, this.files[i])
                
            // }
            
            // formData.append("product",this.image)
            // console.log(files)
            let formData = new FormData()
            this.files.forEach(file => {formData.append(`files[]`, file)})
            formData.append('name', this.image);
            formData.append('price', this.price);
            axios.post('http://127.0.0.1:8000/api/upload_multiple', formData , { 
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
        },
        // uploadForm() {
        //     reader.readAsDataURL(file); // Not sure if this will work in this context.
        //     this.form.files.push(file);
        //     for (let i = 0; i < this.files.length; i++) {
        //         let reader = new FileReader();
        //         formData.append(reader.readAsDataURL(this.files[i]))
        //     }
        //     let formData = new FormData()
        //     // formData.append("files", this.files)

        //     axios.post('http://127.0.0.1:8000/api/upload_multiple', formData)
        // }
        
    },
    mounted() {
        // this.fetchProduct()
    }
}
</script>

<style>

</style>