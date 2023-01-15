
        var bio = document.getElementById("asideBio");
        var photo = document.getElementById("asidePhoto");
        var erga = document.getElementById("asideErga");
        var site = document.getElementById("asideSite");
        var control = document.getElementById("asideControl");
        var asideLogin = document.getElementById("asideLogin");
        var pXronia = document.getElementById("prwtaXronia");
        var polemos = document.getElementById("polemos");
        var spoudes = document.getElementById("spoudes");
        var politiki = document.getElementById("politiki");
        var theatro = document.getElementById("theatro");
        var drama = document.getElementById("drama");
        var kinimatografos = document.getElementById("kinimatografos");
        var serga = document.getElementById("serga");
        var vivlia = document.getElementById("vivlia");
        var prwtesHm = document.getElementById("prwtesHm"); 
        var defteresHm = document.getElementById("defteresHm");
        var tritesHm = document.getElementById("tritesHm");
        var tetartesHm = document.getElementById("tetartesHm");
        var pemptesHm = document.getElementById("pemptesHm");
        var vivlio = document.getElementById("vivlio");
        var exsites = document.getElementById("exsites");
        var parapompes = document.getElementById("parapompes");
        var login = document.getElementById("login");
        var register = document.getElementById("register");



        
        function enableDisableAside(ids){

            disableAside();
            disableMain();
            if(ids == "bio"){
                bio.style.display = "block";
            }else if(ids == "photo"){
                photo.style.display = "block";
            }else if(ids == "erga"){
                erga.style.display = "block";
            }else if(ids == "site"){
                site.style.display = "block";
            }else{
                control.style.display = "block";
            }
        }
        function enableDisableMain(ids){
            disableMain();
            if(ids == "pxronia"){
                pXronia.style.display = "block";
            }else if(ids == "polemos"){
                polemos.style.display = "block";
            }else if(ids == "spoudes"){
                spoudes.style.display = "block";
            }else if(ids == "politiki"){
                politiki.style.display = "block";
            }else if(ids == "prwtesHm"){
                prwtesHm.style.display = "block";
            }else if(ids == "defteresHm"){
                defteresHm.style.display = "block";
            }else if(ids == "tritesHm"){
                tritesHm.style.display = "block";
            }else if(ids == "tetartesHm"){
                tetartesHm.style.display = "block";
            }else if(ids == "pemptesHm"){
                pemptesHm.style.display = "block";
            }else if(ids == "vivlio"){
                getJSONData('vivlio');
                vivlio.style.display = "block";
            }else if(ids == "theatro"){
                getJSONData('theatro');
                theatro.style.display = "block";
            }else if(ids == "drama"){
                getJSONData('drama');
                drama.style.display = "block";
            }else if(ids == "kinimatografos"){
                getJSONData('kinimatografos');
                kinimatografos.style.display = "block";
            }else if(ids == "serga"){
                getJSONData('serga');
                serga.style.display = "block";
            }else if(ids == "vivlia"){
                getJSONData('vivlia');
                vivlia.style.display = "block";
            }else if(ids == "exsites"){
                getJSONData('exsites');
                exsites.style.display = "block";
            }else if(ids == "parapompes"){
                getJSONData('parapompes');
                parapompes.style.display = "block";
            }else if(ids == "login"){
                login.style.display = "block";
            }else if(ids == "register"){
                register.style.display = "block";
            }
        }
        function disableAside(){
            photo.style.display = "none";
            erga.style.display = "none";
            site.style.display = "none";
            bio.style.display = "none";
            control.style.display = "none";
        }
        function disableMain(){
            polemos.style.display = "none";
            pXronia.style.display = "none";
            spoudes.style.display = "none";
            politiki.style.display = "none";
            theatro.style.display = "none";
            drama.style.display = "none";
            kinimatografos.style.display = "none";
            serga.style.display = "none";
            vivlia.style.display = "none";
            prwtesHm.style.display = "none";
            defteresHm.style.display = "none";
            tritesHm.style.display = "none";
            tetartesHm.style.display = "none";
            pemptesHm.style.display = "none";
            vivlio.style.display = "none";
            exsites.style.display = "none";
            parapompes.style.display = "none";
            login.style.display = "none"
            asideLogin.style.display = "none"
            register.style.display = "none"

        }
        function disableDisplayOnLoad() {
            bio = document.getElementById("asideBio");
            photo = document.getElementById("asidePhoto");
            erga = document.getElementById("asideErga");
            site = document.getElementById("asideSite");
            control = document.getElementById("asideControl");
            pXronia = document.getElementById("prwtaXronia");
            polemos = document.getElementById("polemos");
            spoudes = document.getElementById("spoudes");
            politiki = document.getElementById("politiki");
            theatro = document.getElementById("theatro");
            drama = document.getElementById("drama");
            kinimatografos = document.getElementById("kinimatografos");
            serga = document.getElementById("serga");
            vivlia = document.getElementById("vivlia");
            prwtesHm = document.getElementById("prwtesHm");
            defteresHm = document.getElementById("defteresHm");
            tritesHm = document.getElementById("tritesHm");
            tetartesHm = document.getElementById("tetartesHm");
            pemptesHm = document.getElementById("pemptesHm");
            vivlio = document.getElementById("vivlio");
            exsites = document.getElementById("exsites");
            parapompes = document.getElementById("parapompes");
            login = document.getElementById("login");
            asideLogin = document.getElementById("asideLogin");
            register = document.getElementById("register");
            disableAside();
            disableMain();
        }
        function getJSONData(arxeioj) {
            var backslash = "./jsonFiles/";
            var jstring = ".json";
            var string = backslash.concat(arxeioj);
            var final = string.concat(jstring);

            fetch(final, { method: "GET" })
                .then((res) => res.json())
                .then((json) => showJSONData((json),arxeioj))
                .catch((err) => console.error("error:", err));
        }
        function showJSONData(albums, arxeio) {
            let anHTML = `<table><tr><th>ID</th>
                <th>Title</th><th>URL</th></tr>`
            for (let anAlbum of albums) {
                anHTML += "<tr><td>" +
                    anAlbum.id + "</td><td>" +
                    anAlbum.title + "</td><td>" +
                    anAlbum.url + "</td></tr>";
            }
            anHTML += "</table>";
            document.getElementById(arxeio).innerHTML = anHTML;
        }
        window.onload = disableDisplayOnLoad;