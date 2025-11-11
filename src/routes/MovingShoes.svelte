<script>
    import Shoe from "$lib/images/shoe.png";
    import Shoe2 from "$lib/images/shoe2.png";
    const moving = true;
</script>

<div>
    <img src={Shoe2} alt="moving shoe" class="absolute bottom-0 first" style="--animation-state: {moving ? "running" : "paused"}" >
    <img src={Shoe} alt="moving shoe" class="absolute bottom-0 second" style="--animation-state: {moving ? "running" : "paused"}"/>
</div>

<style>
    div{
        width: clamp(400px,33vw,800px);
        height: 10rem;
        position: absolute;
        left: 0;
        bottom: 100%;
    }
    div:hover > img {
        animation-play-state: running;
    }

    .first {
        left: calc(50% - 2rem);
        transform-origin: 0% 100%;
        animation: walk 2s linear infinite;
        animation-play-state: var(--animation-state);

    }
    .second {
        left: calc(50% - 2rem);
        transform-origin: 0% 100%;
        animation: otherWalk 2s linear infinite;
        animation-play-state: var(--animation-state);
    }
    img {
        width: 15rem;
    }

    @keyframes walk {
        0%{
            transform: rotate(0deg) translateY(0.5rem) translateX(0rem);
        }
        5% {
            transform: rotate(-10deg) translateY(0.2rem) translateX(-0.4rem);
        }
        25%{
            transform: rotate(-30deg) translateY(-3rem) translateX(-2rem);
        }
        30%{
            transform: rotate(-25deg) translateY(-2.5rem) translateX(-4rem);
        }
        50% {
            transform: rotate(-10deg) translateY(0.2rem) translateX(-10rem);
        }
        54% {
            transform: rotate(0deg) translateY(0.5rem) translateX(-10rem);
        }
        100% {
            transform: rotate(0deg) translateY(0.5rem) translateX(0rem);
        }
    }

    @keyframes otherWalk{
        0%{
            transform: rotate(-10deg) translateY(0.2rem) translateX(-10rem) scale(1.05);
        }
        4% {
            transform: rotate(0deg) translateY(0.5rem) translateX(-10rem) scale(1.05);
        }
        50% {
            transform: rotate(0deg) translateY(0.5rem) translateX(0rem) scale(1.05);
        }
        55% {
            transform: rotate(-10deg) translateY(0.2rem) translateX(-0.4rem) scale(1.05);
        }
        75%{
            transform: rotate(-30deg) translateY(-3rem) translateX(-2rem) scale(1.05);
        }
        80%{
            transform: rotate(-25deg) translateY(-2.5rem) translateX(-4rem) scale(1.05);
        }
        100% {
            transform: rotate(-10deg) translateY(0.2rem) translateX(-10rem) scale(1.05);

        }
    }
  
</style>