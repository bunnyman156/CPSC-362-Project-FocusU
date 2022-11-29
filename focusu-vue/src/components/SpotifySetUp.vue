<template>
    <!-- for now this works, ideally want to use spotify api -->
    <div class="spotify-container">
      <iframe id="spotify-frame" src="https://open.spotify.com/embed/episode/4suNRKvAebdWKewaUZiR5D?utm_source=generator&theme=0" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  </template>
  

  <script>
    import {ref} from 'vue'
    // import {useTokens} from '../spotify-api/tokens';
    import SpotifyWebApi from 'spotify-web-api-node';

    export default{
      
        setup(){
            // const allTokens = useTokens();
            let availableDevices = ref("");
            const script = document.createElement("script");
            script.src = "https://sdk.scdn.co/spotify-player.js";
            script.async = true;  
            console.log(script.value);
            document.body.appendChild(script);

            const spotifyApi = new SpotifyWebApi({
              clientId : 'c93bb1577d784304b09d60ce2fed9507',
              clientSecret : 'client_Secret',
              redirectUri : 'https://oauth.pstmn.io/v1/browser-callback',
              accessToken : 'BQBZ9A_07yNUO3gmCrgNWfDOg85RmX7dM9849DU6kZe395TEHWD2q7m1baddkWwwJ4E0-QWGfnF5RTdndSO27jtIxdmkZAxe9nkUsIdsa3-NRtpoXImMdZS88Wlw0UBI3_e9CCp7lKZ1d0bXOAECQ92vI6SSupqGzdDXI2yk2LKWJeBseBsJ-bjFF3UoTpF9W-Exz1dLeuzViG8FRZvWN1YkSFn3Acd_kRakqXpZ'
            });

            spotifyApi.setRefreshToken('AQBLGWYdVaKyJ_GsxZXDkLTEOROfA3hlpsuxIjZ5uOY42n1DtkJd0F5YzpGZCvBep3_dXQG6fq05iDSEm-xCL4MJQeGj709SRzgFY02tzXo-q1vdXpaG1Mw_xGzEN0xJN3M');

            //TODO: use web playback sdk to allow music from spotify to play from web
            //example : https://github.com/spotify/spotify-web-playback-sdk-example/blob/main/src/WebPlayback.jsx
            window.onSpotifyWebPlaybackSDKReady = () => {
              console.log("Hello")
              const player = new window.Spotify.Player({
                name: 'Web Playback SDK',
                getOAuthToken: cb => { cb('BQBZ9A_07yNUO3gmCrgNWfDOg85RmX7dM9849DU6kZe395TEHWD2q7m1baddkWwwJ4E0-QWGfnF5RTdndSO27jtIxdmkZAxe9nkUsIdsa3-NRtpoXImMdZS88Wlw0UBI3_e9CCp7lKZ1d0bXOAECQ92vI6SSupqGzdDXI2yk2LKWJeBseBsJ-bjFF3UoTpF9W-Exz1dLeuzViG8FRZvWN1YkSFn3Acd_kRakqXpZ'); },
                volume: 0.5
            });
              // player.connect().then(success => {
              //   if(success) console.log("Hello success!!!")
              //   else console.log("FAILED")
              // })
              // player.addListener('ready', ({device_id}) => {
              //   console.log("Ready with device ID ", device_id)
              // })

              // player.disconnect().then(success => {
              //   if(success) console.log("disconnected");
              // })
            };
            
            spotifyApi.getMyDevices().then(function(data) {
              availableDevices = data.body.devices;
              console.log(availableDevices);
            }, function(err) {
              console.log('Something went wrong!', err);
            });


            // The code below only works if spotify app is open.

            // spotifyApi.getUserPlaylists('31afnuo25m4onj3ewrd6imx6ji5i' ,{limit : 1}).then(function(data) {
            //     console.log('Retrieved playlists', data.body);
            //   },function(err) {
            //     console.log('Something went wrong!', err);
            //   });
            // spotifyApi.setVolume(60,{device_id:"50902ed6d3bf0cc63a2c6fe67def684e81730ba7"}).then(function () {
            //   console.log('Setting volume to 50.');
            //   }, function(err) {
            //   //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
            //   console.log('Something went wrong!', err);
            // });
            // spotifyApi.play({device_id:"50902ed6d3bf0cc63a2c6fe67def684e81730ba7",context_uri : 'spotify:playlist:4JWBBde7yz9ogwxxjnbnmz'}).then(function() {
            //     console.log('Playback started');
            //   }, function(err) {
            //     //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
            //     console.log('Something went wrong!', err);
            //   });
            return {spotifyApi,availableDevices,script};
        }

    }
  
  </script>
    
  <style scoped>
    @import "../styles.css"
  </style>
  