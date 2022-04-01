<script>
    import Fa from 'svelte-fa'
    import { faVideo, faCopyright, fa2,
            fa0 } from '@fortawesome/free-solid-svg-icons'
    
</script>
<footer class="ml-16 fixed bottom-0 p-4 bg-gray-800 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <div style="color: white; font-size: 2em" >
        <Fa class="mx-4" icon={faCopyright} />
        <Fa class="mx-4" icon={fa2} />
        <Fa class="mx-4" icon={fa0} />
        <Fa class="mx-4" icon={fa2} />
        <Fa class="mx-4" icon={fa2} />
    </div>
    <span class="text-sm text-white sm:text-center dark:text-gray-400"><a href="https://nekkalol" class="hover:underline">Nekkalol</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">

        <li>
            
            <a href="#" class="mr-4 text-white hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="mr-4 text-white hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="text-white hover:underline">Contact</a>
        </li>
    </ul>
    
<div style="color: white; font-size: 2em" >
    <Fa class="mx-4" icon={faVideo} />
</div>

</footer>