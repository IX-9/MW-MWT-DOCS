if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let r={};const b=e=>a(e,l),c={module:{uri:l},exports:r,require:b};s[l]=Promise.all(i.map((e=>c[e]||b(e)))).then((e=>(d(...e),r)))}}define(["./workbox-dbb64b4e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-6lrA39Gf.js",revision:"5155f950606fd9b64a7d0d08556760ad"},{url:"assets/404.html-wwz4N-bZ.js",revision:"c4fe631173981763fbaac1a6b4e2fc0d"},{url:"assets/apkxa.html-PuDKie4B.js",revision:"13b307931ede012e40eac3597a7808b4"},{url:"assets/apkxa.html-yo5R3QV-.js",revision:"81b70f6f290f557679cd795a596b8db4"},{url:"assets/app-PrOV8Uj_.js",revision:"86ae62855fa8b1eb72dda19690c5491d"},{url:"assets/app.html-A048Uup_.js",revision:"28fc30ae88440e2791cfd530da79368b"},{url:"assets/app.html-udQgO0UP.js",revision:"15fcf30b441645fdb98849d139092ee3"},{url:"assets/assets.html-DYl2zMTy.js",revision:"d1c25ee601790252ea6cf185a7685504"},{url:"assets/assets.html-RYA0Up6c.js",revision:"6e7bbc0e1783f68d38c3a7ea21eb786a"},{url:"assets/auto-XYC5A0Ix.js",revision:"786b1aef9a90923f3aa3bab127b99c2c"},{url:"assets/BP.html-8aFPx0lQ.js",revision:"06f7129d56b440381f6bdd4e75734727"},{url:"assets/BP.html-yG-htcvE.js",revision:"b66aa9b953bcd09d00315ad61195ca0b"},{url:"assets/BS.html-Ca0VtwFV.js",revision:"95c3c37f56226cd6a3fbac98e5826728"},{url:"assets/BS.html-rZb5PBby.js",revision:"dd7594dacd2ff349a7e3f5a6d9d3b48d"},{url:"assets/cn.html-dqYHhVig.js",revision:"4878c898fb72e2a9d71bd949c678a8bd"},{url:"assets/cn.html-EfH6Ge1V.js",revision:"6fef593fa4826f92b0d3ede13be31d45"},{url:"assets/ct.html-7OCIKvLv.js",revision:"765cb31bb4350866568105f6a15804ec"},{url:"assets/ct.html-wYWfvQUO.js",revision:"af3788111e4d36f4f8738c7b92dc59b4"},{url:"assets/ctto.html-jWDl42oq.js",revision:"9f434d4afec72d805093e00da50c294e"},{url:"assets/ctto.html-Ur7ahoip.js",revision:"98c657ecb920eb175d468db9ae26f92b"},{url:"assets/CYCT.html-69FanWOr.js",revision:"85464e25e4cfffedb10e3019b40ff1a7"},{url:"assets/CYCT.html-cBQspU4t.js",revision:"1611a190df1cf4453ca11da55496e372"},{url:"assets/DE.html-hifkF-Rq.js",revision:"68c6e4a771aca1b97ea4e1299398791f"},{url:"assets/DE.html-sY1KyLz5.js",revision:"d3a3dcc49d4563aa1a6872f04df9d645"},{url:"assets/EGG.html-2wTwG1XT.js",revision:"7072f310ea08911d6a4e14e43616bb93"},{url:"assets/EGG.html-ffJNLbCZ.js",revision:"8f166c4dcea9c929f18cdab4149232e4"},{url:"assets/game-info.html-C2IzPKIo.js",revision:"970912bc6e6616062a32587e8fff81e2"},{url:"assets/game-info.html-T0GhGnR5.js",revision:"834afd5fea168d6ae38cfdafe721c25b"},{url:"assets/Game.html-AJ9Un6qm.js",revision:"a4fa1d0cfe9c4acadb9c40759adb4ad9"},{url:"assets/Game.html-CBd9w_fZ.js",revision:"1d1896f3b5247450d84c196f771ae4a9"},{url:"assets/GO.html-kAk4ecQS.js",revision:"0314ccfb55acb45f3910b9aac01c739e"},{url:"assets/GO.html-YycM3YwM.js",revision:"e6ac582d6bf60daeb94c01504135ecb8"},{url:"assets/Google.html-_DJXMM4U.js",revision:"07ebe45e08758ae9c6cc9d9d6c1bdba6"},{url:"assets/Google.html-DZjCFt55.js",revision:"99253346841644add4f543d088d74c50"},{url:"assets/H18.html--PjhIWXM.js",revision:"1c8e3dc248ffcfb74519d96abcbeaa46"},{url:"assets/H18.html-xKA4-fHJ.js",revision:"9a3e70da1e4566d3884da8e11b4d4ad2"},{url:"assets/index-7IwC0DkA.js",revision:"a0a6a74537488342822dc33151252ce7"},{url:"assets/index-7SG8bi1h.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-1nwD_wmp.js",revision:"47879180932e8ff27fb93a0cbcd2d674"},{url:"assets/index.html-6jqTdSAC.js",revision:"c9ec4d79fbb5e5431e36ca1b550ef2e8"},{url:"assets/index.html-CRu6s6yA.js",revision:"276c5d1fff8601b323904e58cf415754"},{url:"assets/index.html-fmd5iLP_.js",revision:"69ec430be16925ea78567235858517cb"},{url:"assets/index.html-Ifx64SCU.js",revision:"a1e7afadbcb2b7e3d687fa73d337b650"},{url:"assets/index.html-nLlHUUbH.js",revision:"6b2a005cb6fe17a06b968f1bf1af7010"},{url:"assets/index.html-nsEtX4D9.js",revision:"0fb04f2890cb0194e346be8e0e5775d8"},{url:"assets/index.html-opNpm6Gv.js",revision:"9a83116ee57ada609fd52f0c128f91a5"},{url:"assets/index.html-PDe25YyL.js",revision:"6b2a005cb6fe17a06b968f1bf1af7010"},{url:"assets/index.html-vMuGwbyY.js",revision:"6b2a005cb6fe17a06b968f1bf1af7010"},{url:"assets/index.html-wBp1k15C.js",revision:"323c07f1d406cd86ac77a4b88baa9f60"},{url:"assets/index.html-ZYqz84Q4.js",revision:"64f4576f5af93e7dbfd280dd0192d4d2"},{url:"assets/info.html-7WQAAnKU.js",revision:"644f3d8026f70abfdc0af7769954a7b4"},{url:"assets/info.html-Cl4Qnekc.js",revision:"a3153e169e6c10c118d47e173006dc25"},{url:"assets/J25.html-GDQ5IR6M.js",revision:"4f5faada9406324decdbd1b2f6d4b088"},{url:"assets/J25.html-lYHI2haZ.js",revision:"9611b6003e2afa4928940971fe88cec3"},{url:"assets/JD.html-Fgi1WS6L.js",revision:"212bbb4c0cb68fd1a86d6e9d4fe837bd"},{url:"assets/JD.html-WTa9V8kY.js",revision:"759870ce165d789073ed32ce03dbf11a"},{url:"assets/LJ.html-_41vOf7O.js",revision:"be0ae09bb9ab6634acc1e8bd9878b968"},{url:"assets/LJ.html-aBA7MT4A.js",revision:"aa1132edc8bde77fb732a3d70b8a7aad"},{url:"assets/LT.html-irDDfOyk.js",revision:"da60323e4d54b36b2e87ec4adcd8738d"},{url:"assets/LT.html-Xu2H4Zct.js",revision:"02ce4da084bd1ae8e13e4fbe407abe1c"},{url:"assets/md.html-nLJndqs4.js",revision:"85dc7421e5660a2101931805d9729593"},{url:"assets/md.html-NXUA8cwr.js",revision:"e606b780d7debec2281dcb94fb554988"},{url:"assets/mod.html-GBDcuSsW.js",revision:"a61b8603d474bacc30507fcb588665a3"},{url:"assets/mod.html-qlrdpyAi.js",revision:"a72885e04523148ae0d2238ec8d61d9e"},{url:"assets/musk.html-vTJMeiiW.js",revision:"ee8c734d53399e56a3799f4be5ecb77e"},{url:"assets/musk.html-zL9gUBvi.js",revision:"4f7371a6057d4059498f1a81926fb639"},{url:"assets/mw-history.html-AIHld9Hq.js",revision:"0aa05914273f4b167eae6d6f97138394"},{url:"assets/mw-history.html-nNWF3otz.js",revision:"7bc58909b99d6dde9df70969ab028ba8"},{url:"assets/MW-Press.html-v-hq1M0I.js",revision:"64b8e6ca027857fcc18ed0b9af4dd836"},{url:"assets/MW-Press.html-YjivKlfE.js",revision:"d8303ae6d639742e9e711ee0c03eb31a"},{url:"assets/mw-rules.html-FYNW4YaE.js",revision:"ce380b2d7d97228f433304b8c81ba3d3"},{url:"assets/mw-rules.html-tCpEGKa-.js",revision:"4e1444f5aa5fded74e65aa90ee631c46"},{url:"assets/mw68.html-HDlaf8KY.js",revision:"a7442a6d202a3d866c67abb92942e940"},{url:"assets/mw68.html-RYXOHoKS.js",revision:"d9582e81f793e7787fdeef18c58382b0"},{url:"assets/mw70.html-UqaeAAEm.js",revision:"00b5332d9b6872ddc94e05ec8a4cc194"},{url:"assets/mw70.html-Zx0pTsI-.js",revision:"07b441ca5b0183810584def3c7dea393"},{url:"assets/mwpz.html-RXkHuE7K.js",revision:"aa5313d790d40470047a2c3abab185bb"},{url:"assets/mwpz.html-XFqoOU7t.js",revision:"100cf31f8a82bb017cf7dbe571354207"},{url:"assets/nature.html-j991_SLJ.js",revision:"fa6b51afc2aade66f19e4d62be93945f"},{url:"assets/nature.html-TypQE6C_.js",revision:"680acf41f415001c9a976910d4b1e35b"},{url:"assets/news.html-dKvGCnBl.js",revision:"32d129e55e3bba150e8742e2c326d3e3"},{url:"assets/news.html-SxBXz6_4.js",revision:"054fbe615d5df8d0a2fcc44c0f422660"},{url:"assets/object.html-5dMUpGxO.js",revision:"74f4a5c22e4b323ae03a5d2e1f24c455"},{url:"assets/object.html-Oi-Ae612.js",revision:"7c91c6ea3ea11f0f3497f62c3f0e6273"},{url:"assets/pan.html-msXePlbi.js",revision:"5502a10b979b0404796a7f1d8f6b7f6c"},{url:"assets/pan.html-rxMDuccX.js",revision:"464471f62e204df43bec640f9b6d81e3"},{url:"assets/PC.html-3VvoJUu0.js",revision:"93863ecfbc9b407f1040d3242e03afa6"},{url:"assets/PC.html-TwXyVyR1.js",revision:"2e07d80ba84a510b1d0ce45b0082286b"},{url:"assets/people.html-8p9A581T.js",revision:"0a809de651adea440fe0210d15abde93"},{url:"assets/people.html-Z3GCdwbR.js",revision:"59764bfd542165ef9544540d729dad14"},{url:"assets/photoswipe.esm-08_zHRDQ.js",revision:"481d5342d9bb799640b63b15b698dcd4"},{url:"assets/place.html-4lou0BiQ.js",revision:"c994538606144d81a4e5d468ad16f022"},{url:"assets/place.html-cuj0Ve5G.js",revision:"bfc77f2ed9e0356a661cfe442725fac9"},{url:"assets/plugin-vue_export-helper-x3n3nnut.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/QT.html-e0D3dixM.js",revision:"9b729fa7adfe2c69ebc95af095e35264"},{url:"assets/QT.html-RvZtS59n.js",revision:"2d02f09adc3b19c1c63f4412b5deec8f"},{url:"assets/SC.html-4dcEMguJ.js",revision:"62bc5014f11baf455ef212c1bb7e3ece"},{url:"assets/SC.html-NrKfGRhN.js",revision:"7f0aedf11a0bbbcc6b01ff4fb43ec3d2"},{url:"assets/SD.html-8uKtnoIp.js",revision:"f855d90ea5d2e6e9dd430a0325bd4d92"},{url:"assets/SD.html-ynvWkbHN.js",revision:"8bd9da4e9baee9b5953da26c7489afe1"},{url:"assets/SearchResult-_lTzH7Pl.js",revision:"87ff2816981232c2b0788d0740d49381"},{url:"assets/sitehelp.html-l1Zgf-0-.js",revision:"099fe0bcf837c841b72155124409f4fa"},{url:"assets/sitehelp.html-QLlyy2pA.js",revision:"12e5e1311d2b0308d7344053cb1c1bc9"},{url:"assets/STAN-Bilibili.html-2R4RW-CH.js",revision:"a5db2be190a44934e4ad80b58eb4bdc7"},{url:"assets/STAN-Bilibili.html-dgoqnAgV.js",revision:"d59eddb6792c4ee034a9e2525111028a"},{url:"assets/style-42EfX155.css",revision:"fd2be21e445616d3c4c7f834fe434cd2"},{url:"assets/SubmitWork-ppZsSJaG.js",revision:"260376f1dace5ba0cb5a07a1adf9a329"},{url:"assets/symbol.html-MmkluPj9.js",revision:"0bfadd938a472f3bac1b0b6f8b451886"},{url:"assets/symbol.html-OKqb1JIQ.js",revision:"f9071b02e1c1ea87bbe3dcf22ae01c90"},{url:"assets/sys.html-Sl_rdqIG.js",revision:"05ee93c266618e41b5641956b000b2c9"},{url:"assets/sys.html-z0843vvt.js",revision:"984d4310824677e2cd19ad6cc37c7493"},{url:"assets/UP.html-Dnx2-dsp.js",revision:"d3b11c0692269bc1773aa7f01c0f4375"},{url:"assets/UP.html-V5wKS4lM.js",revision:"39eb5f74915060ef060338489b62af29"},{url:"assets/WF.html-dFURYaxq.js",revision:"e4321eac902a3164476e0aeba45f7352"},{url:"assets/WF.html-OKeOjiwY.js",revision:"a42d4c0d47b9e4f627280feddc14ab82"},{url:"assets/WorkTable-W6AkeY4P.js",revision:"aa57df94b79ed1a6e74b898c4c708995"},{url:"assets/YJ.html-3_A6TJQS.js",revision:"98a5ddb6792164628cb4f722eac46427"},{url:"assets/YJ.html-FvOUdaq5.js",revision:"08ce0d2bcd394aa7aaf32b530c7e2aac"},{url:"assets/ZB.html-sziZ1hcq.js",revision:"c6c593629f849d182d824d0cabd18dc1"},{url:"assets/ZB.html-zSpqt5Ml.js",revision:"4be4daae55a302217a7b1f052119ec7e"},{url:"assets/ZD.html-0Js88a3a.js",revision:"acc90edb0673c7f77288d20b6471b50a"},{url:"assets/ZD.html-OtOnHlXr.js",revision:"8ef165a02c3f4bd1f3949c80fae5e5e9"},{url:"assets/ZG.html-d5zrK5qe.js",revision:"3fa30e8c9df8dbf2ff5c04fc2d669cd1"},{url:"assets/ZG.html-QPi2r9I3.js",revision:"bbea920d3bdcf0b3928c2b43cb000889"},{url:"assets/ZH.html-9bSIFDYz.js",revision:"e88c27078da3c72b8e1b02ad8b86cead"},{url:"assets/ZH.html-Qt4qPiVj.js",revision:"417cffb3d48d2f744e66a7580b1ecc54"},{url:"assets/ZY.html-P9YbQaHn.js",revision:"db858462e76ef91a206c6eea6906726a"},{url:"assets/ZY.html-sT4Dzy0F.js",revision:"45ba6bf530213bd56dcbae2320db53b7"},{url:"bg.svg",revision:"cf398a4e163baf4a18104368cbe4b813"},{url:"op.js",revision:"222a1e6617afcc444a5389b9a29c31c9"},{url:"404.html",revision:"bbfcd2efe16037b6c17829d7724ee9c9"},{url:"apkxa.html",revision:"0bf3476bca8ae81c755375b00aa70abb"},{url:"app.html",revision:"376b83733abfc5a9d20f1ba7d978b5d1"},{url:"assets.html",revision:"3a90489f09a40f419cc09536521fda78"},{url:"BP.html",revision:"69475d2f2a7f1943c3b885ef3248bc73"},{url:"BS.html",revision:"975cdf2221b7c50a8f8a2043ba2ee8e0"},{url:"cn.html",revision:"207d097372a0b4f134c0adbf34d975dd"},{url:"ct.html",revision:"b59e74872eca97e5500a3fa57a2a87fd"},{url:"ctto.html",revision:"5ca7cd913784d82f96c0308bb4225fff"},{url:"CYCT.html",revision:"456ea2cb3a502ddfaee06722902fd8b4"},{url:"DE.html",revision:"64eaea2f388c599cb3e3784888ab56c3"},{url:"demo/cook/emoji/index.html",revision:"8cf366dd80fd581a69ed3cee46f7c902"},{url:"demo/cook/emoji/nature.html",revision:"82ebc3a82659e6648c777ca040bd6d2d"},{url:"demo/cook/emoji/object.html",revision:"9020433ae2a1e1ac76972d135823c5b6"},{url:"demo/cook/emoji/people.html",revision:"3861ae6e43b2dabc711d44f43efe373b"},{url:"demo/cook/emoji/place.html",revision:"26fdd0784b31842012f0b41a0aab47e2"},{url:"demo/cook/emoji/symbol.html",revision:"68f845bcc590af1b4a38686d583231ca"},{url:"demo/cook/index.html",revision:"299c8b111b955fbee7b648793231cfea"},{url:"demo/index.html",revision:"ca3ac8e116e832d2a220da9d33d54e49"},{url:"demo/info.html",revision:"a7501d6552a0e49b2dda57d8748ad7c2"},{url:"dev/index.html",revision:"d53541dccf410679217acfe5caab4d91"},{url:"dev/mw-history.html",revision:"4b763555ea9482c3f9a7f4d4ffb02e2c"},{url:"dev/mwpz.html",revision:"6f4774df83e6d085f4ee32842e401dc8"},{url:"EGG.html",revision:"e66974b371cde8052fdab889e80e3962"},{url:"game-info.html",revision:"dc50eeb767eb74a1e1d14eaa46d0a77e"},{url:"Game.html",revision:"851eb5a73831aa3034ad0d6da0f97706"},{url:"GO.html",revision:"76df6179d5b3022f2f3c0985edcda986"},{url:"Google.html",revision:"c115b82a343a599d48363bdbc88b9725"},{url:"H18.html",revision:"6434d44ae8d18035c1dd902cd4a890a5"},{url:"index.html",revision:"46348643d6786784a6734f256725502f"},{url:"J25.html",revision:"260657d556de2fb66fa6e91ddf13b705"},{url:"JD.html",revision:"ba48f8180f3d597484830c5dba45065a"},{url:"LJ.html",revision:"0ec448c3c6bd4eb69a0f58b401df53c7"},{url:"LT.html",revision:"da9ba3b6a0d34de5be2e3c72e18ffaae"},{url:"md.html",revision:"640b93265d4ddda0bc523b961212c3dd"},{url:"mod.html",revision:"50fae78aa2d077567a512834ed3b1e0b"},{url:"mp.html",revision:"0b1cba9c5094cd2f1fe31169b9ab9542"},{url:"musk.html",revision:"b80fbbc055b0d1bcdc4c4eeea384702e"},{url:"MW-Press.html",revision:"a3b928266b45505254fc99336412a0b2"},{url:"mw-rules.html",revision:"887b870f333ba1160235431b2be5d070"},{url:"mw68.html",revision:"878ebac68fd68a614e12e9e284eef866"},{url:"mw70.html",revision:"a38ef0909b77e2df1ab3cf1fb9446112"},{url:"mwt/index.html",revision:"beead641af2f03b59a5a84bda297a5a2"},{url:"news.html",revision:"35022efba5dc988cb407910cb0dd92f5"},{url:"pan.html",revision:"8c56c94e4de8aae270e0ed8dae4e71d7"},{url:"PC.html",revision:"9733cfb5a2c866f367b3a722f571ef69"},{url:"QT.html",revision:"83a22136d3497e5755941791e6313ca5"},{url:"SC.html",revision:"f4747090e7145b63bf37a238059b5d61"},{url:"SD.html",revision:"50f2a47fe08f7e13d732079c5f8a6782"},{url:"sitehelp.html",revision:"45ba9357b3114f4e294e48d81e927327"},{url:"STAN-Bilibili.html",revision:"1f3edd9d5059606345cf872d10b5d94c"},{url:"sys.html",revision:"3ba5e67b30cde9c64a50f6a8b76f531f"},{url:"UP.html",revision:"b548e5c96c971f2d2080e0106df6de08"},{url:"WF.html",revision:"c6600ed8d3987c05c1bea8b22aa77046"},{url:"YJ.html",revision:"faac1da89675ff4d20bcf50291fbfb13"},{url:"ZB.html",revision:"82c8b79519fac593bab0218bbd9db95c"},{url:"ZD.html",revision:"ec1a2a65cd7ef36c4c7a4ef7fb1d1142"},{url:"ZG.html",revision:"8419e908baf7ce5a01a326c2cf7de6ba"},{url:"ZH.html",revision:"fdfa7294505c4f3db49749c706245c90"},{url:"ZY.html",revision:"f60e3693663e4e16e2ba6435d4ea4b8f"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
