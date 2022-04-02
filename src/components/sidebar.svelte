 <script>
     import IconCircle from "../assets/icon-circle.svg"
     import IconRound from "../assets/icon-round.svg"

    import Hoverable from "../components/hoverable.svelte"
 </script>

<div class="container mx-auto mx-0 mt-0 bg-gray-900" >
    <h1 class="font-medium leading-tight mt-0 mb-5 text-white drop-shadow-2xl">⚙️nekkalol</h1>
    </div>
<div style="color: white; font-size: 2em" 
        class="mt-5 fixed top-0 left-0 h-screen w-18 flex flex-col bg-gray-900 shadow-lg">

        <Hoverable let:hovering={active}>
            <div class:active>
                {#if active}
                    <img src="{IconRound}" class="font-medium leading-tight text-3xl mx-0  mt-2 text-white drop-shadow-2xl" alt="..." />

                    <span class="sidebar-tooltip group-hover:scale-100">
                        About
                    </span>
                {:else}
                <img src="{IconCircle}" class="font-medium leading-tight text-3xl mx-0  mt-2 text-white drop-shadow-2xl" alt="..." />
                {/if}
            </div>
        </Hoverable>
    </div>


    

 <style>
    .sidebar-tooltip {
    @apply absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md
    text-white bg-gray-900 mt-10 mx-6
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-left;
  }
 </style>