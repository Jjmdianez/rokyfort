const data=`
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;PORT�TIL GAMING VICTUS HP 15-FA1008NS, INTEL� CORE�I7-13700H;21571;197497974034    ;Todas;Todos;10 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL VIVO Y36 256G+8G METEOR NEGRO;24437;6935117868912    ;Todas;Todos;9 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL VIVO Y36 256G+8G VIBRANT ORO;24438;6935117869865    ;Todas;Todos;9 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;PORTATIL ACER CHROMEBOOK CB314-1H-C07W (NX.ATFEB.00D) 14'' H;32436;4711121026294    ;Todas;Todos;5 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;"PORTATIL ACER CHROMEBOOK CB514-3H (NX.KP4EB.002) 14"" WUXGA I";34243;4711121655166    ;Todas;Todos;5 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;"PORTATIL ASUS ZENBOOK UM425QA-KI244W, 14"" FHD, RYZEN 7 5800H";35620;4711387059326    ;Todas;Todos;10 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;"PORTATIL ASUS F1605PA-MB187W, 16"" WUXGA, I7-11370H, 16GB, 1T";35621;4711387183656    ;Todas;Todos;10 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD. DE MESA;SOBREMESA GAMING VICTUS HP TG02-0171NS, WIN11, AMD RYZEN 5,;35622;197497193510    ;Todas;Todos;25 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD. DE MESA;SOBREMESA OMEN BY HP GT15-1029NS, WIN11, CORE I5, 16GB RAM,;35626;197497193497    ;Todas;Todos;25 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;PORTATIL MEDION AKOYA 15,6'' FHD 1920X1080, I5-10210U QUAD C;46971;4061275199406    ;Todas;Todos;10 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;PORT�TIL HP PAVILION 15-EG2014NS, WIN11, INTEL CORE I7, 16GB;47005;196548785896    ;Todas;Todos;10 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;PORT�TIL HP 15S-FQ5005NS, INTEL� CORE�I5-1235U, 8GB RAM, 512;81882;196548786015    ;Todas;Todos;5 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL VIVO Y22S 6GB+128GB SUMMER CYAN;101227;6935117856278    ;Todas;Todos;7 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL VIVO Y16 4GB+128GB ELEGANT NEGRO;101258;6935117855219    ;Todas;Todos;6 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL VIVO Y22S 6GB+128GB STARLIT AZUL;101259;6935117856261    ;Todas;Todos;7 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;PORT�TIL GAMING VICTUS HP 15-FA0017NS, WIN11, INTEL COREI5-1;104159;196548848959    ;Todas;Todos;10 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;PORT�TIL GAMING VICTUS HP 15-FA0018NS, WIN11, INTEL COREI7-1;104191;196548849536    ;Todas;Todos;10 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;PORT�TIL GAMING VICTUS HP 16-S0014NS RYZEN 7-7840HS, 16GB, 1;171978;197497517538    ;Todas;Todos;25 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;PORT�TIL GAMING VICTUS HP 16-S0002NS RYZEN 7-7840HS, 16GB, 5;172183;197497517514    ;Todas;Todos;25 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;PORT�TIL GAMING VICTUS HP 16-R0013NS INTEL� CORE� I7-13700H,;172300;197497517507    ;Todas;Todos;25 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;PORT�TIL GAMING VICTUS HP 16-R0002NS INTEL� CORE� I7-13700H,;172358;197497517491    ;Todas;Todos;25 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;PORT�TIL GAMING OMEN BY HP 16-WD0004NS INTEL� CORE�I7-13620H;172363;197497517545    ;Todas;Todos;25 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD. DE MESA;CPU HP M01-F2037NS, WIN11, INTEL� CORE I3, 8GB RAM, 512GB SS;178477;197497193503    ;Todas;Todos;10 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;PORT�TIL HP PAVILION 15-EG3002NS, INTEL� CORE� I5-1335U, 16G;186342;197497411362    ;Todas;Todos;20 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;PORT�TIL GAMING VICTUS HP 15-FA0055NS, INTEL� CORE�I5-12450H;186350;197497183160    ;Todas;Todos;10 �
01/10/2024;31/10/2024;OFIMATICA;IMPRESORAS;MULTIFUNCIONAL;IMPRESORA HP SMART TANK 5106 AIO;190086;196786567667    ;Todas;Todos;10 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL OPPO A58 6G+128GB NG;192330;6932169333566    ;Todas;Todos;4 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD. DE MESA;ORDENADOR HP ALL-IN-ONE 24-DF1071NS, WIN11, INTEL� CORE� I5,;195920;197497459531    ;Todas;Todos;10 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;PORTATIL ASUS VIVOBOOK F1504ZA-NJ312W I7-1255U 16GB 1TB SSD;205193;4711387284339    ;Todas;Todos;5 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;PORTATIL ASUS VIVOBOOK F1504ZA-NJ429W I5-1235U 16GB 512GB SS;205699;4711387284346    ;Todas;Todos;5 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;PORT�TIL HP 15S-EQ1175NS AMD RYZEN�3 3250U, 8GB, 256GB PCIE,;206413;196188039519    ;Todas;Todos;10 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;PORTATIL ASUS CHROMEBOOK CX1500CKA-EJ0178,N4500,8GB,64GB EMM;206416;4711387070574    ;Todas;Todos;10 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;"PORTATIL GAMING ACER NITRO AN515-58 15.6"" I5 16GB 1TB SSD W1";214835;4711121242021    ;Todas;Todos;30 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;"PORTATIL ACER ASPIRE A315-24P (NX.KDEEB.00S) 15.6"" FHD IPS S";249120;4711121423680    ;Todas;Todos;10 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;"PORTATIL ACER ASPIRE A315-510P (NX.KDHEB.00R) 15.6"" FHD COMF";249124;4711121554087    ;Todas;Todos;15 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;PORTATIL ACER ASPIRE 3 A315-58-71X2 I71165G7/2*4G/512G;253572;4711121563829    ;Todas;Todos;10 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;PORTATIL ACER GAMING AN515-58-50E8 I512450H /16GB/512G;253577;4711121566196    ;Todas;Todos;15 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD. DE MESA;CPU GAMING VICTUS HP TG02-1038NS, WIN11, INTEL� CORE� I5, 16;260552;197497193527    ;Todas;Todos;25 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;PORTATIL ACER NOTEBOOK A315-58-70CK;265915;4711121701627    ;Todas;Todos;15 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD. DE MESA;SOBREMESA GAMING PRIMUX IOX 870 RYZEN 5 5600G 16GB DDR4 500G;290597;8433735010105    ;Todas;Todos;10 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD. DE MESA;SOBREMESA GAMING PRIMUX IOX DRAKO RYZEN 7 5700X 32GB DDR4 1T;290637;8433735010129    ;Todas;Todos;10 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD. DE MESA;SOBREMESA GAMING PRIMUX IOX LYNX RYZEN 5 5600X 16GB DDR4 500;290647;8433735010112    ;Todas;Todos;10 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL VIVO V29 LITE 128G+8G DREAMY GOLD;306500;6935117867342    ;Todas;Todos;12 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL VIVO V29 LITE 128G+8G FLARE BLACK;306503;6935117867304    ;Todas;Todos;12 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL VIVO Y17S 128G+6G FOREST GREEN;306507;6935117874647    ;Todas;Todos;6 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL.VIVO Y17S 128G+6G GLITTER PURPLE;306512;6935117874661    ;Todas;Todos;6 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TERMINAL VIVO Y52 5G 128G+4G GRAPHITE NEGRO;313235;6935117836683    ;Todas;Todos;7 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL XIAOMI REDMI 13C MIDNIGHT BLACK 6+12;313873;6941812753217    ;Todas;Todos;3 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL XIAOMI REDMI NOTE 13 BLACK 6+128GB;313876;6941812759462    ;Todas;Todos;5 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL SAMSUNG GALAXY S24 256GB VIOLETA COB;314289;8806095299679    ;Todas;Todos;15 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL SAMSUNG GALAXY S24 128GB AMARILLO AM;314314;8806095299631    ;Todas;Todos;15 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL SAMSUNG GALAXY S24 256GB AMARILLO AM;314317;8806095299617    ;Todas;Todos;15 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL SAMSUNG GALAXY S24 256GB NEGRO ONYX;314325;8806095299730    ;Todas;Todos;15 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL SAMSUNG GALAXY S24+ 256GB GRIS MARBL;314326;8806095306810    ;Todas;Todos;15 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL SAMSUNG GALAXY S24 256GB GRIS MARBLE;314329;8806095299808    ;Todas;Todos;15 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL SAMSUNG GALAXY S24 128GB VIOLETA COB;314330;8806095299693    ;Todas;Todos;15 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL GALAXY S24+ 512GB VIOLETA COBALT;314335;8806095307206    ;Todas;Todos;15 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL SAMSUNG GALAXY S24 128GB GRIS MARBLE;314336;8806095299822    ;Todas;Todos;15 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL SAMSUNG GALAXY S24 128GB NEGRO ONYX;314339;8806095299778    ;Todas;Todos;15 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL SAMSUNG GALAXY S24+ 512GB GRIS MARBL;314340;8806095307657    ;Todas;Todos;15 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL GALAXY S24 ULTRA 512GB VIOLETA TITAN;314341;8806095414416    ;Todas;Todos;15 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL GALAXY S24 ULTRA 256GB VIOLETA TITAN;314342;8806095308920    ;Todas;Todos;15 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL GALAXY S24 ULTRA 512GB GRIS TITANIUM;314345;8806095414478    ;Todas;Todos;15 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL GALAXY S24 ULTRA 256GB GRIS TITANIUM;314346;8806095309446    ;Todas;Todos;15 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL SAMSUNG GALAXY S24+ 256GB NEGRO ONYX;314347;8806095307497    ;Todas;Todos;15 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL GALAXY S24+ 512GB NEGRO ONYX;314357;8806095307428    ;Todas;Todos;15 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL GALAXY S24 ULTRA 512GB NEGRO TITANIU;314366;8806095414577    ;Todas;Todos;15 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL GALAXY S24 ULTRA 256GB NEGRO TITANIU;314390;8806095308234    ;Todas;Todos;15 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL GALAXY S24+ 256GB VIOLETA COBALT;314391;8806095307282    ;Todas;Todos;15 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;"PORTATIL ACER PURE SILVER A315-44P (NX.KSJEB.003) 15.6"", AMD";324200;4711121823343    ;Todas;Todos;5 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;PORTATIL HP CHROMEBOOK 15A-NA0004NS INTEL CELERON N4500 128G;331591;197497517477    ;Todas;Todos;10 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";"TERMINAL OPPO A18 4GB+128GB, HD+LCD 6.6"", C�MARA 8+2+5MP, B";339003;6932169340090    ;Todas;Todos;3 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";"TERMINAL OPPO A18 4GB+128GB, HD+LCD 6.6"", C�MARA 8+2+5MP, B";339019;6932169340083    ;Todas;Todos;3 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TERMINAL REDMI NOTE13 PRO+ 5G 12+512GB NEGRO;339380;6941812750582    ;Todas;Todos;10 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;PORTATIL ASUS CHROMEBOOK CX1400FKA-EC0077,, CEL N4500, 8GB,;348823;4711387384480    ;Todas;Todos;5 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;PORTATIL ASUS ZENBOOK 15 OLED UM3504DA-MA286W AMD RYZEN 7 7;348825;4711387284292    ;Todas;Todos;10 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL REDMI NOTE 13 5G GRAPHITE BLACK 8GB;350660;6941812755051    ;Todas;Todos;7 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL REDMI NOTE 13 MIDNIGHT BLACK 8GB RAM;350735;6941812759424    ;Todas;Todos;6 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL SAMSUNG GALAXY A35 5G 128GB AZUL;357045;8806095457604    ;Todas;Todos;8 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL SAMSUNG GALAXY A35 5G 128GB AMARILLO;357088;8806095457741    ;Todas;Todos;8 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL SAMSUNG GALAXY A35 5G 128GB NEGRO;357369;8806095457888    ;Todas;Todos;8 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL SAMSUNG GALAXY A35 5G 128GB VIOLETA;357512;8806095457994    ;Todas;Todos;8 �
01/10/2024;31/10/2024;OFIMATICA;IMPRESORAS;MULTIFUNCIONAL;IMPRESORA HP OFFICEJET PRO 8125E AIO;357898;197029469236    ;Todas;Todos;10 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";PACK TELEFONO MOVIL TERMINAL VIVO V40 SE 5G 8+256GB MORADO;367584;8437021224290    ;Todas;Todos;9 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";PACK TELEFONO MOVIL TERMINAL VIVO V40 SE 5G 8+256GB NEGRO;367607;8437021224283    ;Todas;Todos;9 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL REALME 12 5G 8+256GB GREEN;387185;6941764428171    ;Todas;Todos;10 �
01/10/2024;31/10/2024;OFIMATICA;IMPRESORAS;MULTIFUNCIONAL;IMPRESORA CANON PIXMA TS7450I A4 PPP MFP 3-1 NEGRO;392274;4549292192513    ;Todas;Todos;10 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;PORT�TIL ACER ASPIRE GO AG15-31P, I3-N305,8GB,128GB,WINDOWS;392278;4711121979880    ;Todas;Todos;5 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL OPPO A60 256GB 8GB PURPLE +W45 WHITE;401039;8435280932307    ;Todas;Todos;8 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL OPPO A60 256GB 8GB BLUE + W45 WHITE;401043;8435280932291    ;Todas;Todos;8 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;"PORTATIL ACER NITRO V15 (NH.QNCEB.005) 15.6"", CI5-13420H, 16";407502;4711121714498    ;Todas;Todos;30 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL VIVO V40 LITE 256G+8G, MARR�N;417508;6935117883137    ;Todas;Todos;12 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;HIBRIDOS;2EN1 HP ENVY X360 14-FC0007NS, INTEL� CORE� ULTRA 7-155U-EVO;418428;198122703272    ;Todas;Todos;10 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;"PORTATIL ACER ASPIRE 3 A315-44P (NX.KSJEB.024) 15.6"" FHD, R";424606;4711474078346    ;Todas;Todos;10 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TEL�FONO M�VIL TERMINAL VIVO V40 SE 5G 256G+8G, PIEL MORADO;429674;6935117880310    ;Todas;Todos;9 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TEL�FONO M�VIL TERMINAL VIVO V40 SE 5G 256G+8G ,CRISTAL NEG;429695;6935117880266    ;Todas;Todos;9 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL SAMSUNG GALAXY Z FLIP6 512GB AZUL;434094;8806095614670    ;Todas;Todos;20 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL SAMSUNG GALAXY Z FLIP6 256GB AMARILL;434099;8806095614175    ;Todas;Todos;20 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL SAMSUNG GALAXY Z FLIP6 512GB VERDE;434228;8806095614496    ;Todas;Todos;20 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL SAMSUNG GALAXY Z FLIP6 256GB VERDE;434327;8806095614540    ;Todas;Todos;20 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL SAMSUNG GALAXY Z FOLD6 512GB GRIS;434371;8806095667584    ;Todas;Todos;20 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL SAMSUNG GALAXY Z FOLD6 256GB ROSA;434373;8806095616308    ;Todas;Todos;20 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL SAMSUNG GALAXY Z FOLD6 256GB GRIS;434374;8806095667645    ;Todas;Todos;20 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL SAMSUNG GALAXY Z FLIP6 256GB AZUL;434376;8806095614724    ;Todas;Todos;20 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL SAMSUNG GALAXY Z FOLD6 256GB AZUL OS;434386;8806095616544    ;Todas;Todos;20 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL SAMSUNG GALAXY Z FOLD6 512GB AZUL OS;434408;8806095616490    ;Todas;Todos;20 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL SAMSUNG GALAXY Z FLIP6 256GB GRIS;434444;8806095663883    ;Todas;Todos;20 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL SAMSUNG GALAXY Z FLIP6 512GB GRIS;434446;8806095663807    ;Todas;Todos;20 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL SAMSUNG GALAXY Z FOLD6 512GB ROSA;434447;8806095616254    ;Todas;Todos;20 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL VIVO Y28 4G 128G+4G VERDE;435308;6935117885032    ;Todas;Todos;5 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL VIVO Y28 4G 128G+4G NARANJA;435327;6935117885537    ;Todas;Todos;5 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL VIVO Y33S MIDDAY DREAM;483249;6935117840567    ;Todas;Todos;7 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL VIVO Y33S MIRROR BLACK;483258;6935117840550    ;Todas;Todos;7 �
01/10/2024;31/10/2024;OFIMATICA;TELEFONO MOVIL LIBRE;"SMARTPHONE 5"" Y MAS";TELEFONO MOVIL TERMINAL ZTE A35 BLADE 2+64GB NEGRO;489137;6902176123412    ;Todas;Todos;3 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;PORTATIL HP PAVILION AERO 13-BE0013NS RYZEN 7-5800U 8 GB 51;534591;196188904046    ;Todas;Todos;10 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;PORTATIL HP PAVILION AERO 13-BE0015NS RYZEN 7-5800U 16 GB 51;535011;196188903803    ;Todas;Todos;10 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;PORTATIL ACER CP513-1H (NX.AS7EB.005) 13.3'' FHDIPS, SNAPDRA;548944;4710886892397    ;Todas;Todos;15 �
01/10/2024;31/10/2024;OFIMATICA;MICROORDENADORES;MICROORD.PORTATILES;PORTATIL ACER CB314-1HT NX.AUEEB.005 14'' FHDIPS, ICDN4020,;548952;4710886945178    ;Todas;Todos;5 �
`
