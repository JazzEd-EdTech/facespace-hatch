OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Nem sikerült törölni a hozzárendeléseket.",
    "Failed to delete the server configuration" : "Nem sikerült törölni a szerver konfigurációját",
    "Invalid configuration: Anonymous binding is not allowed." : "Érvénytelen beállítás: Anonim kötés nem engedélyezett.",
    "Valid configuration, connection established!" : "Érvényes beállítás, kapcsolat létrejött!",
    "Valid configuration, but binding failed. Please check the server settings and credentials." : "Érvényes beállítás, de a kötés nem jött létre. Kérlek ellenőrizd a szerver beállításokat és a hitelesítőadatokat.",
    "Invalid configuration. Please have a look at the logs for further details." : "Érvénytelen konfiguráció. További információkért nézze meg a naplófájlokat!",
    "No action specified" : "Nincs megadva parancs",
    "No configuration specified" : "Nincs megadva konfiguráció",
    "No data specified" : "Nincs adat megadva",
    " Could not set configuration %s" : "A konfiguráció nem állítható be: %s",
    "Action does not exist" : "A művelet nem létezik",
    "LDAP user and group backend" : "LDAP felhasználói és csoport háttér",
    "Renewing …" : "Megújítás...",
    "Very weak password" : "Nagyon gyenge jelszó",
    "Weak password" : "Gyenge jelszó",
    "So-so password" : "Nem túl jó jelszó",
    "Good password" : "Jó jelszó",
    "Strong password" : "Erős jelszó",
    "The Base DN appears to be wrong" : "Úgy tűnik, a címtár gyökere (base DN) hibás",
    "Testing configuration…" : "Beállítások ellenőrzése...",
    "Configuration incorrect" : "Konfiguráió hibás",
    "Configuration incomplete" : "Konfiguráció nincs befejezve",
    "Configuration OK" : "Konfiguráció OK",
    "Select groups" : "Csoportok kiválasztása",
    "Select object classes" : "Objektumosztályok kiválasztása",
    "Please check the credentials, they seem to be wrong." : "Kérlek ellenőrizd az azonosítókat, hibásnak tűnnek.",
    "Please specify the port, it could not be auto-detected." : "Kérlek add meg a port számát, nem lehetett automatikusan detektálni.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "A címtár gyökerét (base DN) nem sikerült automatikusan felismerni, kérlek, ellenőrizd az azonosítókat, a kiszolgáló nevét és a portot.",
    "Could not detect Base DN, please enter it manually." : "Nem sikerült felismerni a címtár gyökerét (base DN), kérlek, add meg kézzel.",
    "{nthServer}. Server" : "{nthServer}. Szerver",
    "No object found in the given Base DN. Please revise." : "Nem találhatók objektumok a megadott címtár gyökérben (base DN). Kérlek, ellenőrizd.",
    "More than 1,000 directory entries available." : "Több mint 1000 címtár bejegyzés érhető el.",
    " entries available within the provided Base DN" : "a megadott címtár gyökér alatt elérhető bejegyzések",
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "Hiba törént. Kérlek, ellenőrizd a címtár gyökerét (base DN), a kapcsolat beállításait és az azonosítókat.",
    "Do you really want to delete the current Server Configuration?" : "Tényleg törölni szeretné a szerver beállításait?",
    "Confirm Deletion" : "A törlés megerősítése",
    "Mappings cleared successfully!" : "A hozzárendelések sikeresen törölve.",
    "Error while clearing the mappings." : "Hiba a leképzések törlése közben.",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "A névtelen hozzáférés (anonymous bind) nem engedélyezett. Kérlek, add meg a felhasználó címtár-azonosítóját (DN) és jelszavát.",
    "LDAP Operations error. Anonymous bind might not be allowed." : "LDAP műveleti hiba. Lehetséges hogy az anonim kötés nincs engedélyezve.",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "A mentés sikertelen. Kérlek győződj meg róla, hogy az adatbázis működik. Töltsd újra a folytatás előtt.",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "A módváltás engedélyezi az automatikus LDAP lekérdezéseket. Az LDAP-od méretétől függően sokáig tarthatnak. Biztosan átváltod a módot?",
    "Mode switch" : "Üzemmód váltás",
    "Select attributes" : "Attribútumok kiválasztása",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command-line validation): <br/>" : "Felhasználó nincs meg. Kérlek ellenőrizd a felhasználónevet és a bejelentkezési adatokat. Érvényes szűrő (vágólap használathoz a parancssori ellenőrzéshez): <br/>",
    "User found and settings verified." : "Felhasználó megtalálva, beállítások ellenőrizve.",
    "Consider narrowing your search, as it encompassed many users, only the first one of whom will be able to log in." : "Esetleg szűkítsd a keresést, mert rengeteg felhasználóra igaz, de csak az első fog tudni belépni.",
    "An unspecified error occurred. Please check log and settings." : "Ismeretlen hiba lépett fel. Kérlek nézd meg a naplót.",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "A keresési feltétel érvénytelen, talán el van írva, például nem azonos a kezdő és záró zárójelek száma.",
    "A connection error to LDAP / AD occurred, please check host, port and credentials." : "LDAP/AD kapcsolati hiba lépett fel, kérlek ellenőrizd a hosztot, portot és a bejelentkezési adatokat.",
    "The \"%uid\" placeholder is missing. It will be replaced with the login name when querying LDAP / AD." : "A \"%uid\" helytartó hiányzik. Ez kerül behelyettesítésre a felhasználónévvel az LDAP / AD lekérdezéskor.",
    "Please provide a login name to test against" : "Kérlek adj meg egy bejelentkezési nevet az újrateszteléshez",
    "The group box was disabled, because the LDAP / AD server does not support memberOf." : "A csoport doboz ki van kapcsolva, mert az LDAP/AD szerver nem támogatja a memberOf-ot.",
    "Password change rejected. Hint: " : "Jelszó módosítás elutasítva. Tipp:",
    "Please login with the new password" : "Kérlek lépj be az új jelszóval",
    "Your password will expire tomorrow." : "A jelszavad holnap lejár",
    "Your password will expire today." : "A jelszavad ma lejár.",
    "_Your password will expire within %n day._::_Your password will expire within %n days._" : ["A jelszavad %nnap múlva lejár. ","A jelszavad %n nap múlva lejár."],
    "LDAP / AD integration" : "LDAP / AD integráció",
    "_%s group found_::_%s groups found_" : ["%s csoport van","%s csoport van"],
    "_%s user found_::_%s users found_" : ["%s felhasználó van","%s felhasználó van"],
    "Could not detect user display name attribute. Please specify it yourself in advanced LDAP settings." : "Nem lehet megállapítani a megjelenítendő név mezőt. Kérlek add meg kézzel a bővített LDAP beállításokban.",
    "Could not find the desired feature" : "A kívánt funkció nem található",
    "Invalid Host" : "Érvénytelen gépnév",
    "Test Configuration" : "A beállítások tesztelése",
    "Help" : "Súgó",
    "Groups meeting these criteria are available in %s:" : "A %s szolgáltatás azon csoportok létezését veszi figyelembe, amik a következő feltételeknek felelnek meg:",
    "Only these object classes:" : "Csak ezek az objektumosztályok:",
    "Only from these groups:" : "Csak ezekből a csoportokból:",
    "Search groups" : "Csoport keresés",
    "Available groups" : "Elérhető csoportok",
    "Selected groups" : "Kiválasztott csoportok",
    "Edit LDAP Query" : "LDAP lekérdezés szerkesztés",
    "LDAP Filter:" : "LDAP szűrő:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "A szűrő meghatározza, hogy mely LDAP csoportok lesznek jogosultak %s elérésére.",
    "Verify settings and count the groups" : "Ellenőrizd a beállításokat és számold meg a csoportokat",
    "When logging in, %s will find the user based on the following attributes:" : "Bejelentkezve, %s a következő attribútumok alapján találja meg a felhasználót:",
    "LDAP / AD Username:" : "LDAP / AD felhasználónév:",
    "Allows login against the LDAP / AD username, which is either \"uid\" or \"sAMAccountName\" and will be detected." : "Bejelentkezés engedélyezése LDAP / AD felhasználónévvel, ami vagy \"uid\" vagy  \"sAMAccountName\" és fel lesz ismerve.",
    "LDAP / AD Email Address:" : "LDAP / AD e-mail cím:",
    "Allows login against an email attribute. \"mail\" and \"mailPrimaryAddress\" allowed." : "Bejelentkezés engedélyezése az email attribútum alapján. \"mail\" és \"mailPrimaryAddress\" megengedett.",
    "Other Attributes:" : "Más attribútumok:",
    "Defines the filter to apply, when login is attempted. \"%%uid\" replaces the username in the login action. Example: \"uid=%%uid\"" : "A belépéskor alkalmazandó filtert definiálja. \"%%uid\" lecseréli a felhasználónevez a bejelentkezésnél. Példa: \"uid=%%uid\"",
    "Test Loginname" : "Teszt bejelentkezési név",
    "Verify settings" : "Beállítások ellenőrzése",
    "1. Server" : "1. Szerver",
    "%s. Server:" : "%s. szerver",
    "Add a new configuration" : "Új beállítás hozzáadása",
    "Copy current configuration into new directory binding" : "Jelenlegi beállítások másolása egy új mappakötésbe",
    "Delete the current configuration" : "Aktuális konfiguráció törlése",
    "Host" : "Kiszolgáló",
    "You can omit the protocol, unless you require SSL. If so, start with ldaps://" : "Kihagyhatod a protokollt kivéve, ha SSL-t használsz. Ebben az esetben ldaps://-el kezdd",
    "Port" : "Port",
    "Detect Port" : "Port detektálás",
    "User DN" : "A kapcsolódó felhasználó DN-je",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "Annak a felhasználónak a DN-je, akinek a nevében bejelentkezve kapcsolódunk a kiszolgálóhoz, pl. uid=agent,dc=example,dc=com. Bejelentkezés nélküli eléréshez ne töltse ki a DN és Jelszó mezőket!",
    "Password" : "Jelszó",
    "For anonymous access, leave DN and Password empty." : "Bejelentkezés nélküli eléréshez ne töltse ki a DN és Jelszó mezőket!",
    "Save Credentials" : "Hitelesítőadatok mentése",
    "One Base DN per line" : "Soronként egy DN-gyökér",
    "You can specify Base DN for users and groups in the Advanced tab" : "A Haladó fülre kattintva külön DN-gyökér állítható be a felhasználók és a csoportok számára",
    "Detect Base DN" : "Alap DN detektálása",
    "Test Base DN" : "Alap DN ellenőrzése",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "Kerülje az automata LDAP kéréseket. Hasznos nagy telepítéseknél, de némi LDAP ismeretet igényel.",
    "Manually enter LDAP filters (recommended for large directories)" : "LDAP szűrők kézi beállitása (ajánlott a nagy könyvtáraknál)",
    "Listing and searching for users is constrained by these criteria:" : "Felhasználók keresésének és listázásának szabályozása ezekkel a szabályokkal:",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "A leggyakoribb objektum osztályok a felhasználóknál az organizationalPerson, person, user, és inetOrgPerson. Ha nem vagy benne biztos melyik osztályt válaszd, kérlek konzultálj a könyvtár adminnal.",
    "The filter specifies which LDAP users shall have access to the %s instance." : "A szűrő meghatározza, hogy mely LDAP felhasználók lesznek jogosultak %s elérésére.",
    "Verify settings and count users" : "Beállítások ellenőrzése és felhasználók megszámolása",
    "Saving" : "Mentés",
    "Back" : "Vissza",
    "Continue" : "Folytatás",
    "Please renew your password." : "Kérjük frissítsd a jelszavad.",
    "An internal error occurred." : "Belső hiba lépett fel.",
    "Please try again or contact your administrator." : "Próbáld meg ismét vagy lépj kapcsolatba a rendszergazdáddal.",
    "Current password" : "Jelenlegi jelszó",
    "New password" : "Új jelszó",
    "Renew password" : "Jelszó megújítás",
    "Wrong password. Reset it?" : "Hibás jelszó. Visszaállítja?",
    "Wrong password." : "Hibás jelszó.",
    "Cancel" : "Mégsem",
    "Server" : "Szerver",
    "Users" : "Felhasználók",
    "Login Attributes" : "Bejelentkezési attribútumok",
    "Groups" : "Csoportok",
    "Expert" : "Profi",
    "Advanced" : "Haladó",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Figyelmeztetés:</b> Az LDAP PHP modul nincs telepítve, ezért ez az alrendszer nem fog működni. Kérje meg a rendszergazdát, hogy telepítse!",
    "Connection Settings" : "Kapcsolati beállítások",
    "Configuration Active" : "A beállítás aktív",
    "When unchecked, this configuration will be skipped." : "Ha nincs kipipálva, ez a beállítás kihagyódik.",
    "Backup (Replica) Host" : "Biztonsági (replika) kiszolgáló",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Adjon meg egy opcionális biztonsági kiszolgálót. Ez a fő LDAP/AD szerver replikája kell legyen.",
    "Backup (Replica) Port" : "Biztonsági kiszolgáló (replika) portszáma",
    "Disable Main Server" : "A fő szerver kihagyása",
    "Only connect to the replica server." : "Csak a másodlagos (másolati) szerverhez kapcsolódjunk.",
    "Turn off SSL certificate validation." : "Ne ellenőrizzük az SSL-tanúsítvány érvényességét",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "Használata nem javasolt (kivéve tesztelési céllal). Ha a kapcsolat csak ezzel a beállítással működik, akkor importálja az LDAP-szerver SSL tanúsítványát a(z) %s szerverre!",
    "Cache Time-To-Live" : "A gyorsítótár tárolási időtartama",
    "in seconds. A change empties the cache." : "másodpercen belül. A változtatás törli a gyorsítótár tartalmát.",
    "Directory Settings" : "Címtár beállítások",
    "User Display Name Field" : "A felhasználónév mezője",
    "The LDAP attribute to use to generate the user's display name." : "Ebből az LDAP attribútumból képződik a felhasználó megjelenítendő neve.",
    "2nd User Display Name Field" : "Második felhasználónév mező",
    "Optional. An LDAP attribute to be added to the display name in brackets. Results in e.g. »John Doe (john.doe@example.org)«." : "Opcionális. Egy LDAP attribútum, melyet a felhasználónév mellé teszünk a zárójelben. Például: »John Doe (john.doe@example.org)«.",
    "Base User Tree" : "A felhasználói fa gyökere",
    "One User Base DN per line" : "Soronként egy felhasználói fa gyökerét adhatjuk meg",
    "User Search Attributes" : "A felhasználók lekérdezett attribútumai",
    "Optional; one attribute per line" : "Nem kötelező megadni, soronként egy attribútum",
    "Group Display Name Field" : "A csoport nevének mezője",
    "The LDAP attribute to use to generate the groups's display name." : "Ebből az LDAP attribútumból képződik a csoport megjelenítendő neve.",
    "Base Group Tree" : "A csoportfa gyökere",
    "One Group Base DN per line" : "Soronként egy csoportfa gyökerét adhatjuk meg",
    "Group Search Attributes" : "A csoportok lekérdezett attribútumai",
    "Group-Member association" : "A csoporttagság attribútuma",
    "Dynamic Group Member URL" : "Dinamikus csoporttag URL",
    "The LDAP attribute that on group objects contains an LDAP search URL that determines what objects belong to the group. (An empty setting disables dynamic group membership functionality.)" : "Az LDAP attribútum ami megmutatja az LDAP kereséseknél a csoport objektumban mi tartozik a csoportba. (Üres beállítás esetén a dinamikus csoporttagság funkció kikapcsol.)",
    "Nested Groups" : "Egymásba ágyazott csoportok",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "Amikor be van kapcsolva, akkor azokat a csoportokat is kezelni tudjuk, melyekben a személyek mellett csoportok is vannak. (Csak akkor működik, ha a csoportok \"member\" attribútuma DN-eket tartalmaz.)",
    "Paging chunksize" : "Lapozási darab méret",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "A lapméret megadásával korlátozható az egy fordulóban kapott találatok száma, akkor is, ha az LDAP-keresés nagyon sok találatot ad, ha ezt az LDAP-kiszolgáló támogatja. (Ha 0-ra állítjuk, akkor ezáltal letiltjuk ezt a lapozó funkciót.)",
    "Enable LDAP password changes per user" : "LDAP jelszavak felhasználónkénti változtatásának engedélyezése",
    "Allow LDAP users to change their password and allow Super Administrators and Group Administrators to change the password of their LDAP users. Only works when access control policies are configured accordingly on the LDAP server. As passwords are sent in plaintext to the LDAP server, transport encryption must be used and password hashing should be configured on the LDAP server." : "LDAP felhasználók jelszómódosításának engedélyezése és Super Adminisztrátorok és Csoport Adminisztrátorok felhatalmazása felhasználóik jelszavainak módosítására. Csak az LDAP megfelelő jelszópolitikai beállításai mellett működik. Mivel a jelszavakat sima szövegként küldjük az LDAP szervernek, átviteli titkosítást kell alkalmazni és a jelszó hash-eket az LDAP szerveren kell bekapcsolni.",
    "(New password is sent as plain text to LDAP)" : "(Az új jelszó sima szövegként lett elküldve az LDAP-nak)",
    "Default password policy DN" : "Alapértelmezett jelszó szabály DN",
    "The DN of a default password policy that will be used for password expiry handling. Works only when LDAP password changes per user are enabled and is only supported by OpenLDAP. Leave empty to disable password expiry handling." : "Az alapértelmezett jelszó lejárati politika DN-je, melyet alkalmazunk. Csak akkor működik, ha a felhasználónkénti jelszómódosítás be van kapcsolva és csak OpenLDAP-al. Hagyd üresen a jelszólejárat kikapcsolásához.",
    "Special Attributes" : "Különleges attribútumok",
    "Quota Field" : "Kvóta mező",
    "Leave empty for user's default quota. Otherwise, specify an LDAP/AD attribute." : "Hagyd üresen az alapértelmezett felhasználói kvótáért, vagy adj meg egy LDAP/AD paramétert.",
    "Quota Default" : "Alapértelmezett kvóta",
    "Override default quota for LDAP users who do not have a quota set in the Quota Field." : "Alapértelmezett kvóta felülírása azon felhasználóknál, akiknek nincs beállított érték a Kvóta Mezőben.",
    "Email Field" : "E-mail mező",
    "Set the user's email from their LDAP attribute. Leave it empty for default behaviour." : "Felhasználó e-mail címének beírása az LDAP attribútum alapján. Hagyd üresen az alapértelmezett működéshez.",
    "User Home Folder Naming Rule" : "Felhasználói Home mappa elnevezési szabály",
    "Leave empty for user name (default). Otherwise, specify an LDAP/AD attribute." : "Hagyja üresen, ha a felhasználónevet kívánja használni. Ellenkező esetben adjon meg egy LDAP/AD attribútumot!",
    "Internal Username" : "Belső felhasználónév",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [ a-zA-Z0-9_.@- ].  Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all *DAV services. With this setting, the default behavior can be overridden. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users." : "Alapértelmezetten egy belső felhasználónév jön létre a UUID attribútumból. Gondoskodik róla, hogy a felhasználónév egyedi legyen és ne kelljen a karaktereket konvertálni. A belső felhasználónév csak a következő karakterekből állhat: [ a-zA-Z0-9_.@- ].  Más karakterek az ASCII megfelelőikre lesznek cserélve, vagy csak simán ki lesznek hagyva. Ütközés eseté egy szám lesz hozzáadva, vagy növelve. A belső felhasználónév a felhasználó belső azonosítására szolgál. Egyben a felhasználó saját mappájának neveként is szolgál. Része a távoli URL-eknek, például az összes DAV szolgáltatásnál. Ezzel a beállítással az alapértelmezett működés felülírható. Hagyd üresen az alapértelmezett működéshez. A változások csak újonnan leképezett (hozzáadott) LDAP felhasználóknál kerül alkalmazásra.",
    "Internal Username Attribute:" : "A belső felhasználónév attribútuma:",
    "Override UUID detection" : "Az UUID-felismerés felülbírálása",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "Az UUID attribútum alapértelmezetten felismerésre kerül. Az UUID attribútum segítségével az LDAP felhasználók és csoportok egyértelműen azonosíthatók. A belső felhasználónév is azonos lesz az UUID-vel, ha fentebb nincs másként definiálva. Ezt a beállítást felülbírálhatja és bármely attribútummal helyettesítheti. Ekkor azonban gondoskodnia kell arról, hogy a kiválasztott attribútum minden felhasználó és csoport esetén lekérdezhető legyen és egyedi értékkel bír. Ha a mezőt üresen hagyja, akkor az alapértelmezett attribútum lesz érvényes. Egy esetleges módosítás csak az újonnan hozzárendelt (ill. létrehozott) felhasználókra és csoportokra lesz érvényes.",
    "UUID Attribute for Users:" : "A felhasználók UUID attribútuma:",
    "UUID Attribute for Groups:" : "A csoportok UUID attribútuma:",
    "Username-LDAP User Mapping" : "Felhasználó - LDAP felhasználó hozzárendelés",
    "Usernames are used to store and assign (meta) data. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "A felhasználónevek adattárolásra és hozzárendelésre (meta) szolgálnak. A felhasználók pontos felismerésére és azonosítására, minden LDAP felhasználóhoz hozzárendelünk egy belső felhaszhálónevet. Ez a felhasználónév LDAP felhasználóhoz rendelését igényli. A létrehozott felhasználónév az LDAP UUID-hez kötődik. Egyben a DN tárolásra kerül az LDAP interakció csökkentésére, de nem használjuk az azonosítás során. Ha a DN változik, a változást megtaláljuk. A belső felhasználónevek újrahasznosításra kerülnek. A leképezés kitörlése mindenfelé maradványokat eredményez. A leképezések törlése nem konfiguráció érzékeny, minden LDAP konfigurációt érint! Soha ne töröld a leképezéseket éles rendszeren, csak tesztelési vagy kísérleti állapotban.",
    "Clear Username-LDAP User Mapping" : "A felhasználó - LDAP felhasználó hozzárendelés törlése",
    "Clear Groupname-LDAP Group Mapping" : "A csoport - LDAP csoport hozzárendelés törlése",
    "LDAP" : "LDAP",
    "<b>Warning:</b> Apps user_ldap and user_webdavauth are incompatible. You may experience unexpected behavior. Please ask your system administrator to disable one of them." : "<b>Figyelem:</b> a user_ldap és user_webdavauth alkalmazások nem kompatibilisek. Együttes használatuk váratlan eredményekhez vezethet. Kérje meg a rendszergazdát, hogy a kettő közül kapcsolja ki az egyiket."
},
"nplurals=2; plural=(n != 1);");
