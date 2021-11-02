<template>
    <div class="grid place-items-center min-h-screen w-full">
        <form class="flex w-[30rem] flex-col gap-y-2 dark:bg-gray-850 p-10 rounded-3xl shadow-lg bg-gray-200 bg-opacity-60">
            <input type="text" placeholder="Enter your login" class="auth">
            <input type="email" placeholder="Enter your email" class="auth">
            <input type="password" placeholder="Enter your password" class="auth">
            <input type="password" placeholder="Confirm your password" class="auth">
            <button 
            class="dark:bg-gray-950 dark:text-gray-200 py-2 rounded-xl mt-4 dark:hover:bg-gray-900 bg-gray-300 hover:bg-gray-200 transition"
            >
                Sign In
            </button>
        
        </form>
    </div>
</template>
<script>
export default {
    
}
</script>