<script>
  import Swap from '../components/Swap.svelte';
  import poolsConfig from '../config/pools.json';

  const setupListedToken = () => {
    for (let i = 0; i < poolsConfig.available.length; i++) {
      let pie = poolsConfig[poolsConfig.available[i]];
      if (!pie.useMintOverBuy) {
        listed.push({
          address: poolsConfig.available[i],
          symbol: pie.symbol,
          icon: getTokenImage(poolsConfig.available[i]),
        });
      }
    }
  };
</script>

<div class="content flex flex-col pt-10pc justify-center spl">
  <div class="font-huge text-center">Exchange Tokens</div>
  <div class="font-thin text-lg text-center mt-10px mb-10px md:w-80pc">
    Swap Pies at the best rates.
  </div>

  <Swap {setupListedToken} />
</div>
