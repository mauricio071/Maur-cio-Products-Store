import Vue3Toastify, { toast, type Content, type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Vue3Toastify, { autoClose: 2000 } as ToastContainerOptions);

    // toast.error = (message: Content) =>
    //     toast(message, {
    //         type: "error",
    //         position: "bottom-right",
    //         icon: "❌",
    //         theme: "dark",
    //     });

    return {
        provide: { toast },
    };
});