 <script>
     import Fa from 'svelte-fa'
     import { faFlag } from '@fortawesome/free-solid-svg-icons'

    import Hoverable from "../components/hoverable.svelte"
 </script>

<div style="color: white; font-size: 2em" 
        class="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 shadow-lg">

        <Hoverable let:hovering={active}>
            <div class:active>
                {#if active}
                    <Fa class="mx-4" icon={faFlag} />
                    <span class="sidebar-tooltip group-hover:scale-100">
                        test123
                    </span>
                {:else}
                    <Fa class="mx-4" icon={faFlag} />
                {/if}
            </div>
        </Hoverable>

</div>

 <style>
    .sidebar-tooltip {
    @apply absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md
    text-white bg-gray-900 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-left;
  }
 </style>