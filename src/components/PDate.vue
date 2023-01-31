<template>
    <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="290px">
        <template v-slot:activator="{ on, attrs }">
        <v-text-field
            dense
            :hide-details="hide ? 'auto': false"
            v-model="dateModel"
            :rules="rules"
            :label="label"
            append-icon="mdi-calendar"
            @click:append="menu = true"
            readonly
            :disabled="disabled"
            v-bind="{...attrs, ...$props}"
            v-on="on"
            :filled="filled"
        ></v-text-field>
        </template>
        <v-date-picker
            v-model="dateModel" 
            @input="menu = false"
            :min="min"
            :max="max"
            :disabled="disabled || readonly"
            @change="onChange"
            no-title 
            scrollable>
        </v-date-picker>
    </v-menu>
</template>

<script>
export default {
    name: "PDatePicker",
    props: {
        value: String,
        label: String,
        rules: Array,
        hide: Boolean,
        max: String,
        min: String,
        filled: Boolean,
        outlined: Boolean,
        rounded: Boolean,
        backgroundColor: String,
        disabled: {
            type: Boolean,
            default: false
        },
        color: String,
        readonly: Boolean
    },
    data() {
        return {
            menu: null,
            date: null,
        }
    },
    computed: {
        dateModel: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit('input', val);
            }
        }
    },
    methods: {
        onChange(val) {
            this.$emit('update', val);
        }
    }
}
</script>