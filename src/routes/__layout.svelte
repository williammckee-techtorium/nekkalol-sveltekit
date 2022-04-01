<script>
    import "virtual:windi.css"
    import Sidebar from "../components/sidebar.svelte"
    import Footer from "../components/footer.svelte"
</script>
<Sidebar/>
<div class="mx-16">
    <slot/>
</div>
<Footer/>