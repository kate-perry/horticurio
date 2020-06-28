import React from 'react';
import './styles.scss';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import MuiTheme from './MuiTheme.js';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
//import * as Constants from './tiledata.js';

const tiledata = [
  {
    img: 'https://lh3.googleusercontent.com/rMwYQio_qsywM90Rtn320oWAxefKbGP0hb7-8N4XFMPOzfMhuxQh0JeuT5FZ1xXd8k1rHNnOrAV8wz2vFzWZ6Tybf705wO_OWUg6i0CVF9SJ9EWoP5GZPyrcXPgEs0FV92KdicJqChjRL2sOuvi2iQrgtgC3eQjelag0at0hsfrT7uDts3IynTtgPKoQhhiTjpnxDVqjJxiRzTblumQ_v2nXv-5COXWmywPbnDMe9oyRjXucGXHxb6h5iAm5pC6_mCQ8pIoWPF45tNH2rYOIM1TvTKvgE4mgQn2J7uCXYh6d_AVswzRwVjGJ88oXCwvixBZrgH_59jGLTWvOWJDYl-mJA2iUASX1LSfzrtNN40Q6lFg7nruCmxyFMC3nQdR2RHpmCPPTPC33Jqv3SO3oGPylGm16Y7KXxJXhFF8Xi5eYMSz8wUC8umjrJh2XwweW8pe2dq1EhimL-loxEUJotYGl0TSRTNH5YnkbVRK6NTSr2ZKsaFsuW_9EGb1VuYLdgCwJ4EolN-EoRKeSwlgjpvHTlbnF81tyVz8I2S7u-jl8ebOoosG7o8YLxW_sr6mNGiL3hD5D7600tfvtBoTOo-bqptX28x5XMCvDSDvnw7NnQf6JIAoeMOPDfti5YZESw80cC9bnsSqHBXoRiyjvpzMpf14LxIRzAbBTABA8_fUebLwLwRIUP8k-4EJGG5Q=w785-h888-no?authuser=0',
    title: 'Ivy on hanging trellis',
    author: 'Kate Perry',
    cols: 1,
  },
  {
    img: 'https://lh3.googleusercontent.com/LAdzHntSbK0Y2PGNnujZLDzDzRD9oPtD77dvj8iBcDetiZlYaJ3_24oOZ6cAP6I_3FXDSCirR4TVVxtKRRFo712QwD3Qq1TzUIZSXX6BaJ38sUUnPPAc_pof9ND1_k9PqLsapxvVsiOR2GSB1HVcNzJmyfGh9nCT5tZR9juuIFTGJXM6EV4OG0eUufItZJwVB-8g8s5BlHKXKylgvoeTP7mJGVrTDr4GRckTEb9fywyEyRF5x3PBBBeju_-UQR4Z3p0pPAoYYEd5Epkn3LpJkdmkNwCthVak1KobGipezKpJ6L8agZt01YxPk8tKKug_M-GWlgbfR85bMhnX5H7J9bHBDGh3haathHZVTbgMPD3aNyxmQIXKeE7gr1YWxp5wmUKG_CZsKvk3mcmO7-X0PmYIQahHNIcr_OcbywKHfKKaLigix7v_5RvN-38NCbPp8dDkPX5D4xFND0lHkEE3lB2jDy608mu_t6v3HMIaTZwFqKZbKbxz-z_JTpNTwd-nRAp-0gvdN_pjsyWWzTRyMU1NdyZxUBFew1P3UUrsZFiVznI2I8x3buOUoOGmx49kTr9whLPhgN38op9e4Ui5no07Ueiaa2SfXtFF0CgWMdUdwTjsYQakI8ghriivlz8q8OnJI64I6lxTCPPYeL3e4L9AHliGXoVjAtilZuVgwOUFjPyhXxxxkStRMxgC9g=w500-h888-no?authuser=0',
    title: 'Monstera leaves',
    author: 'Kate Perry',
    cols: 1,
  },
  {
    img: 'https://lh3.googleusercontent.com/tK0DO9Q3dXWZC_QxiPaCU3hnfNoQPiFgbbmoL-BdZLFENvmYDbeAMV8zlwwmoQiWNL7CFWGdRQWPK8P99M4o5S49PFrc_51lq4jWcBbH9B6kpPW_SlP1VuHhoZIA9m7pGhIgm2ijZIMxfIEt4sII01WJjomiDxve5TBS4r-USB0VbWx7L3QRnte8nJoP3ZKqlhz-8UOnhLq5ryE4aSD9UfglPCI-psJatW2aaoea_TneHkbIB492JgdQPeZS5H_E-QdrqCLJwzvAijiEmQVaIAF_P4PQmylXmXGo8KwmnbKBIrFKPDqQnwRWoAgeJnLz-9sal2AfGJBOqKpnyjAi_9JlITUk0cvmUIeb2bdQuPlk1bNjyPGIBCpmwDBYBsVt7tk5hiRrsgWJTCX156EpNKTUHGK6ZxOfSvP1_iwEMd28XCMvK88UTirHGoICtQFiSA2DkxNhxQUzRq0U4uVtwDRWbwhoh-qeJL57UPbwZLI918YNLBUYLHfbUsKEsfGCC4Xwizol76zaaI_r2VydWiqkD95MmuUCjzPL-iqVGHO72nkPu4Y8aQ-NweEbxeuGlVujd8C6qTg976Dj1FprJQ12mKxqf-7Lxj62glTiio3NNU7qT58VApg-THrSDuPVLYJYxOGcq0EiwvJyjqEPhJI74GZtXciNS9IRFgvS7cQ1FJoQu1KSo29VmHPGjQ=w1502-h888-no?authuser=0',
    title: 'Hoya in pot',
    author: 'Kate Perry',
    cols: 2,
  },
  {
    img: 'https://lh3.googleusercontent.com/_mmzUtSqBJxlzKHFGkE6Lzj0etnTiN4n4FrV2SxhMBhUyvNypElnPc312ydMlspwipvzImCAzTtsy6K6a_MrjWy5VINasteoHBwd-m2oV9biOfpSQW61cg42Nexxf_CbzO6ksllfW3Ke4lhmWK4ocAOClUKa6_MMzFp5aeAbR2FvjOMwa4LEnFszNfhNxDbnqFnVFM6degmHt3QH0R12dHaLUb2RXkL9KOYR44F_fsjMRlKmmZKU208rn6l9eOuyLsAD_sAHpxUq1x9q5nYe66C4jH_fctMZBksQ-__1C9poQy5K8NwGrqGSvgrAN3l-fGlS4bk80jKx8qjHfHWJZ37xvwiZpeQIFMpHfqP0V01dWqBO30VyVWPTkyT6LtAeXsOt9GjyCM449TS-DevJlIh9q6U8jSvicZnksZMWYSY1q4_Bn0ImoUW5djOILxC5Te85Ndse8BgZQVtcv65zX4iESiPJHHT0stp-Jm_x5iUfqal0lkL8oBmWebu3Ru59zvSjYdCwIhpsG9mGRzqivpjYOvYLZ_Nnfb5QIn06o_1WpBBxfDTI1_cNYdBGg0VYKOu9xbZ07wnYQ2k6C58BZdgL-MevUEnN8UTzCKRWCFQec6xGZFivisGuAeD7LzOHyh6S8RKtt0tnyNU4kC-82AaIR7UmEh9Euv8qAgtCGfvSyIXwrGziAVA0T6YyQg=w506-h888-no?authuser=0',
    title: 'Tall cactus',
    author: 'Kate Perry',
    cols: 1,
  },
  {
    img: 'https://lh3.googleusercontent.com/tqNtqrMSNWYN-DPjaFnpGL31CzMExvg1GgghxRKQ8_HsxhnCQda9Ic-hVz6OwJcQuMQ4afMA0XNs5e2ICm7wtFGGkrkjSj1JVDv4BMAGr8E7Hk74b3clNHa8jniphCUMrbzmWN6z2Fsi_FFndB_hszWxaES54m0gD__Clz8gyOfLsAA2ZDKLdYI7_LwaOiP5zarW50ZzTQrVe33C7z5UxiI8e1WZRMnGOBW-oo6kyfbGKH_FdhTZLCxNONBo9irWocsAqEbIbM4gZFgmQF3wR-oQ665YWpqbAUit9uQjuBE171GEC-whltehSooip0fio40KVpYk4_5Z1nkPqm-RORJz1p0Oel4drOJJLwjenwB9qfsfP6uGBTa2vENYijrWNwCbZ_og1DZ7TQNgchbbtujeFpdWBQKENjytL2eSF4uCNF-7zJMGO44gCeRJWbiEQmILFSXXXKNwKGYwPd1-a68mjYPpXNd3Vq-k0X5gFlJUn8K2hs2T1TFWmbaRTlZSd6ZwYllmSQ999VKsurmaPzLRzONOhPxscqrzziNqy69T-WhAQpDkoVNNIPW7I27IT5bp1RZWeVU4Y3n-aDdV35iqO4jgKbOn1VLD0XjX2dulQ0oaVfMSG65E98G1EHun9L192LJOO7NL9cD80eJ2ov5iCjsnbKyvbxLvL5QCJbf695DRbbMkggI3HQPIVg=w711-h888-no?authuser=0',
    title: 'Hoya compacta',
    author: 'Kate Perry',
    cols: 2,
  },
  {
    img: 'https://lh3.googleusercontent.com/z0AAf1ggTTGTT11t5F8fozcNqA7hgonjEWbMgWvLuLB89lBgS6dbH9yVNgvxf7XYdYa9ewXpe25IMJBQ6uu8ODHGpNDSd_Jsd3q78Hs5NLTFlPEiS295KcAVJgslzIWj0OtQCvujv-4V80F9UvorFgoV0mVWnX1KRE5sdt1vvCx32pgbKSXsCtR_VzamLU3jMFicWcqHDa_mjNYE3fdP4YCV-xrMVxceCglMFtAnVeAeleySsO6X5ZtcILMgWQJo2ba-4qHnY6K77nhFlUqxMBI1VR1Qo4dBCYbuNiHViLJCOS2FIzQbjK5TNc58CJdav15nUBYcdXpPIOXLVURzxtOMS452r0TU-w4de2K5Pk2Pw7vKSNqZ-8LDvuAombGS7uZQ-44cehlymDBZF_UFlsOgTMV7ENVpTp6rCuvtqk6ClYeWICJyWuDqKDHrcCkdl1lQnCj9AmibxzszJXL838SRteQd80BD_XgiCgR-QtPq_I6fNFe_NcYpAKcS96xxKkp5X1SYDYl6nM5eWL03nS1CvIvpLO3p8eHDvs3OR-OrPqnOxPU_dB1OhR50cFIzOohfc7RAa5K6JpVyk9gYd48bfxrI2JOU_fU-TCoe0AYcC4p2jwdw5Gbp7yMVkEMssyTSSYRxyZsxclwHxtzPwHP5iuHaiNH6Fjl0QpHtXmpbnuyK96vnBunESkuXvw=w926-h888-no?authuser=0',
    title: 'Money tree zombie leaves',
    author: 'Kate Perry',
    cols: 2,
  },
  // {
  //   img: 'img',
  //   title: 'Monstera leaves',
  //   author: 'Kate Perry',
  //   cols: 1,
  // },
  
  ];

function Browse() {
  return (
    <MuiThemeProvider theme={MuiTheme}>
      <div className="app" >
      Welcome to Browse!
        {/* <GridList cellHeight={160} className='grid-list' cols={3}>
          {tiledata.map((tile) => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList> */}
      </div>
    </MuiThemeProvider >
  );
}

export default Browse;