<template>
  <div class="home flex flex-col space-y-16 px-2 snap-center">
    <div id="spinningText" class="flex h-[80vh]">
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <span class="a">
        <h1 class="text-8xl lg:text-9xl">WiMaX</h1>
      </span>
    </div>

    <div class="content text-2xl text-white px-4">
      <div
        class="
          v1
          font-semibold
          italic
          break-words
          text-3xl
          tracking-widest
          leading-relaxed
          lg:text-center lg:max-w-2xl lg:mx-auto
          cursor-pointer
        "
      > <p>
        “One whose ideal is mortal dies when his ideal is achieved. But one
        whose ideal is immortal must become immortal himself to attain it” </p>
      </div>
    </div>

    <!-- animate-spin -->
    <!----------------------------------- about -------------------------------------------->

    <section
      id="about"
      class="
        mt-12
        max-w-7xl
        grid grid-cols-1
        grid-rows-2
        gap-36
        lg:grid-cols-2
        lg:grid-rows-1
        lg:gap-6
        justify-between
        items-center
        bg-gray-900
        px-6
        py-3
      "
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="100"
      data-aos-duration="260"
    >
      <div class="px-4 lg:px-8 py-4 mx-auto">
        <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
        <h1
          class="
            text-center text-blue-300
            font-semibold
            text-3xl
            py-4
            hover:text-blue-400
            cursor-pointer
          "
        >
          WiMaX
        </h1>
        <p class="c italic text-xl text-justify">
          "This is WiMaX, a club initiated by the STUDENTS of artificial
          intelligence and data science department of Easwari Engineering
          college. WiMaX is not just a club but also a COMMUNITY for our
          students to sharpen their skills in their interested domain and to
          explore new domains. Our ideology is focused on COLLECTIVE GROWTH. We
          help among ourselves by GAINING KNOWLEDGE from others and TEACHING
          their KNOWLEDGE to others. We try to bring our IDEAS to real life to
          make an IMPACT in our society and the world and an INSPIRATION to our
          younger generation."
        </p>
      </div>

      <div class="px-8 py-4 flex flex-col items-center mx-auto">
        <img src="/logo_bg.png" alt="about" />
      </div>
    </section>

    <section class="text-white bg-gray-900">
      <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 sm:py-32 lg:px-8">
        <div class="max-w-lg mx-auto text-center">
          <h1 class="lg:text-4xl font-bold text-2xl mb-12">
            Make your <span class="text-orange-500">IMPACT</span> in the Right Field
          </h1>
          <p class="mt-4 text-gray-300"></p>
        </div>

        <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 bg-gray-900">
            <CardDomain v-for="domain in domains" :key="domain.title" :content = "domain" />            
        </div>

        <div class="mt-12 text-center">
          <a
            class="
              flex mx-auto
              items-center
              px-8
              py-3
              h-16
              w-48
              mt-8
              text-white
              bg-blue-400
              justify-center
              border border-white
              rounded
              transition duration-500 ease-in-out
              hover:bg-transparent
              active:text-white
              group
              focus:outline-none focus:ring
            "
            href="/joinus"
          >
            <div class="text-sm text-center w-24 whitespace-nowrap font-medium max-w-[20rem] group-hover:max-w-0 transition-all duration-500 ease-in-out group-hover:overflow-hidden">Get Started</div>

            <svg
              :class="`ml-3 max-w-0 group-hover:max-w-[20rem] transition-all duration-500 ease-in-out`"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!----------------------------------- About -------------------------------------------->

    <!-- <section id="about" class="container-fluid flex justify-between items-center bg-gray-900 px-6 py-3">
        <div class="w-1/2 px-8 py-4">
            <h1 class="text-center text-blue-300 font-semibold text-3xl py-4 hover:text-blue-400 cursor-pointer">About Us</h1>
            <p class="text-center text-sm text-blue-300">This is WiMaX, a club initiated by the STUDENTS of artificial intelligence and data science department of Easwari Engineering college. WiMaX is not just a club but also a COMMUNITY for our students to sharpen their skills in their interested domain and to explore new domains. Our ideology is focused on COLLECTIVE GROWTH. We help among ourselves by GAINING KNOWLEDGE from others and TEACHING their KNOWLEDGE to others. We try to bring our IDEAS to real life to make an IMPACT in our society and the world and an INSPIRATION to our younger generation.</p>
        </div>
        <div class="w-1/2 px-8 py-4">
            <img src="/data\images\naveen_funny.jpeg" alt="funny_naveen">
        </div> 
    </section> -->

    <div class="container">
      <h1 class="heading" data-target-resolver></h1>
    </div>
    <!----------------------------------- Projects -------------------------------------------->

    <section
      id="projects"
      class="
        container-fluid
        flex
        justify-between
        items-center
        bg-gray-900
        px-6
        py-3
      "
    >
      <section class="bg-white dark:bg-gray-900">
        <!-- projects here -->
      </section>
    </section>
  </div>
</template>

<style scoped>
  .content {
  margin-bottom: 4em;
}
.content p {
  display: inline;
  background-repeat: no-repeat;
  transition: all 500ms ease-in-out;
}
/*

svg {
  stroke: #93c5fd;
}

.v3 p {
  color: transparent;
  background-position: right;
  background-size: 100% 100%;
  background-image: linear-gradient(rgb(17 24 39), rgb(17 24 39));
}
.v3:hover p {
  color: rgba(230, 76, 60, 0.99) ;
  background-size: 0% 100%;
} */

.v1 p {
  background-position: bottom left;
  background-size: 0% 5px;
  background-image: linear-gradient(#e53e3e, #e53e3e);
  padding-bottom: 5px;
}
.v1:hover p {
  background-size: 100% 5px;
}

.c {
  display: flex;
  justify-content: center;
  color: #eee;
}

#home {
  animation: homepage 2s ease-in-out;
}
@keyframes homepage {
  0% {
    opacity: 0;
    transform: translateX(-80px);
  }
  60% {
    opacity: 0.1;
    transform: translateX(0px);
  }
  100% {
    opacity: 1;
  }
}

#spinningText {
  animation: spinText 5s;
}

@keyframes spinText {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.a {
  color: rgba(230, 76, 60, 0.99);
  text-shadow: 0 20px 25px rgb(42, 51, 61), 0 40px 60px rgb(42, 51, 61);
  font-size: 80px;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: -3px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.a:before,
.a:after {
  content: "";
  padding: 0.9em 0.4em;
  position: absolute;
  left: 50%;
  width: 100%;
  top: 50%;
  display: block;
  border: 15px solid rgb(147 197 253);
  transform: translateX(-50%) translateY(-50%) rotate(0deg);
  animation: 10s infinite alternate ease-in-out tipsy;
}

@keyframes tipsy {
  0% {
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
  }
  100% {
    transform: translateX(-50%) translateY(-50%) rotate(360deg);
  }
}

.a:before {
  border-color: rgb(147 197 253) rgb(147 197 253) rgb(42, 51, 61)
    rgb(42, 51, 61);
  z-index: -1;
}

.a:after {
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgb(147 197 253)
    rgb(147 197 253);
  box-shadow: 25px 25px 25px rgb(33, 36, 39);
}

/* About */
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 5rem;
}

html {
  height: 100%;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
}

/* starts background */

#stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 1589px 771px #FFF , 363px 759px #FFF , 1535px 66px #FFF , 321px 540px #FFF , 1096px 99px #FFF , 1112px 848px #FFF , 1475px 1809px #FFF , 1570px 1059px #FFF , 1100px 119px #FFF , 1193px 1745px #FFF , 1262px 1036px #FFF , 1711px 102px #FFF , 1872px 69px #FFF , 1832px 1794px #FFF , 65px 1306px #FFF , 496px 1659px #FFF , 1997px 526px #FFF , 540px 1773px #FFF , 41px 700px #FFF , 1924px 1817px #FFF , 1424px 765px #FFF , 1125px 1213px #FFF , 291px 243px #FFF , 1700px 40px #FFF , 90px 526px #FFF , 468px 1181px #FFF , 176px 1172px #FFF , 550px 111px #FFF , 1746px 958px #FFF , 829px 1898px #FFF , 1197px 932px #FFF , 1147px 950px #FFF , 397px 1236px #FFF , 1684px 1379px #FFF , 1362px 1358px #FFF , 1457px 202px #FFF , 1467px 1894px #FFF , 1950px 94px #FFF , 1567px 1288px #FFF , 990px 1266px #FFF , 1866px 25px #FFF , 1099px 1691px #FFF , 876px 660px #FFF , 325px 1645px #FFF , 1578px 1612px #FFF , 1269px 1289px #FFF , 1771px 367px #FFF , 498px 746px #FFF , 1260px 836px #FFF , 1002px 264px #FFF , 1731px 1234px #FFF , 1389px 1899px #FFF , 1447px 149px #FFF , 713px 250px #FFF , 579px 497px #FFF , 1853px 383px #FFF , 1816px 1558px #FFF , 1050px 468px #FFF , 760px 1492px #FFF , 1322px 298px #FFF , 1198px 1619px #FFF , 31px 167px #FFF , 580px 880px #FFF , 140px 1810px #FFF , 926px 1199px #FFF , 1462px 1206px #FFF , 260px 1843px #FFF , 411px 415px #FFF , 1583px 486px #FFF , 727px 836px #FFF , 309px 1831px #FFF , 1521px 399px #FFF , 364px 164px #FFF , 309px 1961px #FFF , 217px 749px #FFF , 1395px 641px #FFF , 1678px 545px #FFF , 757px 1759px #FFF , 1165px 1716px #FFF , 1603px 1013px #FFF , 977px 765px #FFF , 581px 765px #FFF , 1419px 1880px #FFF , 426px 557px #FFF , 7px 885px #FFF , 699px 1934px #FFF , 40px 1899px #FFF , 1509px 696px #FFF , 131px 442px #FFF , 505px 840px #FFF , 536px 513px #FFF , 1942px 1751px #FFF , 1949px 915px #FFF , 1986px 391px #FFF , 1875px 1303px #FFF , 363px 471px #FFF , 847px 1250px #FFF , 1180px 1548px #FFF , 427px 379px #FFF , 714px 892px #FFF , 1624px 1754px #FFF , 1268px 328px #FFF , 1651px 1562px #FFF , 1823px 1799px #FFF , 461px 1294px #FFF , 1656px 1455px #FFF , 256px 1903px #FFF , 547px 189px #FFF , 1043px 133px #FFF , 740px 1288px #FFF , 1552px 1504px #FFF , 558px 823px #FFF , 1660px 1735px #FFF , 1506px 342px #FFF , 165px 1009px #FFF , 1266px 260px #FFF , 163px 1646px #FFF , 772px 1376px #FFF , 1026px 672px #FFF , 608px 728px #FFF , 420px 1311px #FFF , 1065px 1956px #FFF , 1156px 154px #FFF , 1014px 442px #FFF , 526px 98px #FFF , 305px 854px #FFF , 1104px 44px #FFF , 169px 1861px #FFF , 1556px 465px #FFF , 493px 1327px #FFF , 965px 1094px #FFF , 62px 1728px #FFF , 123px 285px #FFF , 791px 1204px #FFF , 1226px 620px #FFF , 848px 696px #FFF , 1500px 501px #FFF , 1834px 1034px #FFF , 1479px 381px #FFF , 978px 103px #FFF , 1082px 166px #FFF , 1628px 399px #FFF , 776px 628px #FFF , 1077px 1058px #FFF , 1027px 136px #FFF , 172px 301px #FFF , 1108px 1490px #FFF , 1682px 1917px #FFF , 579px 293px #FFF , 848px 1353px #FFF , 817px 780px #FFF , 1874px 718px #FFF , 117px 1123px #FFF , 1491px 886px #FFF , 1593px 195px #FFF , 308px 1583px #FFF , 1491px 1781px #FFF , 990px 1073px #FFF , 958px 57px #FFF , 72px 1093px #FFF , 1562px 36px #FFF , 129px 1640px #FFF , 1727px 1647px #FFF , 1842px 364px #FFF , 1919px 1206px #FFF , 1817px 1613px #FFF , 1270px 674px #FFF , 836px 892px #FFF , 1733px 267px #FFF , 731px 1663px #FFF , 1483px 1039px #FFF , 467px 109px #FFF , 882px 1827px #FFF , 161px 19px #FFF , 260px 997px #FFF , 130px 1652px #FFF , 1916px 368px #FFF , 286px 1044px #FFF , 1424px 617px #FFF , 1302px 1140px #FFF , 16px 493px #FFF , 1509px 1341px #FFF , 433px 959px #FFF , 297px 166px #FFF , 113px 310px #FFF , 137px 1113px #FFF , 778px 994px #FFF , 1786px 674px #FFF , 417px 1765px #FFF , 1036px 1927px #FFF , 1773px 74px #FFF , 1877px 1629px #FFF , 1229px 649px #FFF , 1939px 1209px #FFF , 505px 227px #FFF , 403px 1505px #FFF , 735px 1953px #FFF , 1059px 1463px #FFF , 396px 604px #FFF , 827px 1193px #FFF , 1812px 1359px #FFF , 1604px 328px #FFF , 122px 668px #FFF , 417px 1400px #FFF , 1251px 433px #FFF , 1484px 573px #FFF , 1048px 1870px #FFF , 1450px 241px #FFF , 943px 1418px #FFF , 465px 1378px #FFF , 1111px 1396px #FFF , 1225px 1639px #FFF , 583px 1142px #FFF , 722px 1611px #FFF , 678px 979px #FFF , 1993px 432px #FFF , 87px 106px #FFF , 1482px 1736px #FFF , 638px 954px #FFF , 718px 1255px #FFF , 492px 1220px #FFF , 1407px 28px #FFF , 1063px 208px #FFF , 401px 33px #FFF , 425px 984px #FFF , 1139px 933px #FFF , 194px 547px #FFF , 196px 889px #FFF , 830px 1618px #FFF , 692px 397px #FFF , 11px 174px #FFF , 551px 1533px #FFF , 1385px 1578px #FFF , 1932px 385px #FFF , 1065px 1445px #FFF , 1574px 398px #FFF , 1517px 769px #FFF , 1764px 501px #FFF , 1141px 1880px #FFF , 54px 39px #FFF , 940px 1363px #FFF , 777px 1645px #FFF , 244px 31px #FFF , 1503px 880px #FFF , 27px 681px #FFF , 796px 1725px #FFF , 429px 801px #FFF , 693px 862px #FFF , 1825px 1936px #FFF , 425px 471px #FFF , 566px 649px #FFF , 641px 21px #FFF , 1200px 1044px #FFF , 1977px 1161px #FFF , 1359px 1809px #FFF , 1641px 986px #FFF , 760px 1080px #FFF , 1822px 1644px #FFF , 904px 443px #FFF , 1500px 1620px #FFF , 1654px 1215px #FFF , 998px 1598px #FFF , 1187px 395px #FFF , 1680px 298px #FFF , 1420px 1411px #FFF , 374px 374px #FFF , 878px 1812px #FFF , 420px 1018px #FFF , 222px 1659px #FFF , 1983px 313px #FFF , 1464px 1908px #FFF , 1873px 1221px #FFF , 1801px 1630px #FFF , 1497px 189px #FFF , 1016px 649px #FFF , 237px 1295px #FFF , 977px 780px #FFF , 1355px 651px #FFF , 791px 696px #FFF , 1666px 566px #FFF , 370px 1233px #FFF , 671px 1332px #FFF , 1517px 1043px #FFF , 324px 541px #FFF , 707px 1862px #FFF , 771px 1212px #FFF , 1243px 1705px #FFF , 604px 1123px #FFF , 1773px 1979px #FFF , 1509px 340px #FFF , 1869px 143px #FFF , 725px 604px #FFF , 1650px 946px #FFF , 1625px 246px #FFF , 402px 1031px #FFF , 1231px 288px #FFF , 1510px 504px #FFF , 1051px 1247px #FFF , 277px 164px #FFF , 1149px 1314px #FFF , 1483px 527px #FFF , 164px 1007px #FFF , 217px 1036px #FFF , 1512px 1288px #FFF , 607px 1423px #FFF , 1019px 296px #FFF , 192px 1409px #FFF , 259px 648px #FFF , 501px 1720px #FFF , 1868px 1308px #FFF , 430px 1976px #FFF , 918px 1676px #FFF , 925px 1672px #FFF , 242px 1315px #FFF , 1485px 1922px #FFF , 1960px 103px #FFF , 778px 1808px #FFF , 43px 1857px #FFF , 1382px 283px #FFF , 1040px 1452px #FFF , 497px 1019px #FFF , 287px 668px #FFF , 396px 875px #FFF , 1956px 971px #FFF , 1456px 1219px #FFF , 1047px 803px #FFF , 1795px 72px #FFF , 1465px 333px #FFF , 948px 1899px #FFF , 405px 926px #FFF , 869px 96px #FFF , 1129px 258px #FFF , 822px 493px #FFF , 309px 1679px #FFF , 706px 1883px #FFF , 772px 493px #FFF , 1793px 981px #FFF , 1681px 91px #FFF , 351px 214px #FFF , 1348px 1156px #FFF , 1027px 1252px #FFF , 305px 1663px #FFF , 6px 697px #FFF , 468px 507px #FFF , 1274px 1938px #FFF , 94px 495px #FFF , 139px 765px #FFF , 1935px 405px #FFF , 611px 1863px #FFF , 1203px 161px #FFF , 1695px 234px #FFF , 203px 1832px #FFF , 1858px 1866px #FFF , 946px 1888px #FFF , 1530px 991px #FFF , 502px 1858px #FFF , 1744px 1045px #FFF , 1205px 1462px #FFF , 1510px 502px #FFF , 1310px 316px #FFF , 1802px 83px #FFF , 553px 424px #FFF , 39px 56px #FFF , 956px 1174px #FFF , 1199px 1816px #FFF , 1859px 242px #FFF , 748px 1397px #FFF , 982px 182px #FFF , 183px 1389px #FFF , 1562px 1510px #FFF , 1139px 927px #FFF , 770px 1131px #FFF , 1137px 1935px #FFF , 406px 1784px #FFF , 1467px 1861px #FFF , 1005px 1294px #FFF , 477px 1377px #FFF , 81px 64px #FFF , 1013px 558px #FFF , 838px 1347px #FFF , 697px 94px #FFF , 1295px 98px #FFF , 1469px 595px #FFF , 1440px 1839px #FFF , 1403px 1851px #FFF , 1779px 350px #FFF , 1009px 1139px #FFF , 1960px 193px #FFF , 831px 344px #FFF , 1955px 927px #FFF , 1343px 1581px #FFF , 1587px 619px #FFF , 54px 1801px #FFF , 153px 1890px #FFF , 1517px 620px #FFF , 1270px 1964px #FFF , 792px 1066px #FFF , 177px 130px #FFF , 1322px 940px #FFF , 1088px 1512px #FFF , 903px 59px #FFF , 298px 1170px #FFF , 1305px 118px #FFF , 766px 1015px #FFF , 668px 1458px #FFF , 1370px 1122px #FFF , 1175px 1031px #FFF , 1478px 996px #FFF , 22px 436px #FFF , 1680px 1320px #FFF , 264px 1198px #FFF , 1413px 1836px #FFF , 609px 838px #FFF , 417px 633px #FFF , 532px 375px #FFF , 804px 1678px #FFF , 1184px 1909px #FFF , 830px 465px #FFF , 1404px 626px #FFF , 689px 1528px #FFF , 1962px 1021px #FFF , 672px 941px #FFF , 1102px 1697px #FFF , 177px 1657px #FFF , 1410px 903px #FFF , 1304px 171px #FFF , 1339px 1537px #FFF , 1679px 1208px #FFF , 416px 1671px #FFF , 221px 1938px #FFF , 1565px 1724px #FFF , 1468px 1015px #FFF , 294px 1360px #FFF , 173px 1534px #FFF , 1484px 1131px #FFF , 1323px 640px #FFF , 233px 463px #FFF , 870px 1880px #FFF , 1915px 477px #FFF , 224px 406px #FFF , 1127px 1841px #FFF , 49px 16px #FFF , 511px 1360px #FFF , 785px 1886px #FFF , 715px 408px #FFF , 913px 1088px #FFF , 1573px 383px #FFF , 1431px 619px #FFF , 830px 1344px #FFF , 1970px 1495px #FFF , 1493px 698px #FFF , 2000px 668px #FFF , 1207px 901px #FFF , 470px 32px #FFF , 306px 41px #FFF , 192px 696px #FFF , 930px 1986px #FFF , 1338px 796px #FFF , 795px 1147px #FFF , 1617px 579px #FFF , 1810px 722px #FFF , 1270px 50px #FFF , 1711px 53px #FFF , 1317px 69px #FFF , 726px 375px #FFF , 1880px 917px #FFF , 869px 243px #FFF , 1241px 337px #FFF , 700px 1379px #FFF , 346px 252px #FFF , 381px 406px #FFF , 616px 511px #FFF , 846px 1507px #FFF , 1465px 1115px #FFF , 239px 782px #FFF , 1103px 957px #FFF , 900px 1706px #FFF , 976px 1666px #FFF , 1635px 1338px #FFF , 1175px 1102px #FFF , 770px 1146px #FFF , 1270px 1644px #FFF , 1261px 630px #FFF , 708px 976px #FFF , 556px 958px #FFF , 259px 1237px #FFF , 1176px 486px #FFF , 1389px 232px #FFF , 1623px 703px #FFF , 165px 954px #FFF , 1049px 795px #FFF , 826px 1122px #FFF , 1056px 430px #FFF , 1678px 477px #FFF , 828px 69px #FFF , 492px 1445px #FFF , 1935px 1484px #FFF , 667px 1880px #FFF , 391px 710px #FFF , 1407px 131px #FFF , 437px 370px #FFF , 54px 492px #FFF , 611px 1068px #FFF , 250px 1509px #FFF , 334px 643px #FFF , 187px 1876px #FFF , 1272px 1914px #FFF , 750px 909px #FFF , 1324px 1247px #FFF , 311px 1315px #FFF , 1104px 667px #FFF , 349px 293px #FFF , 624px 1333px #FFF , 825px 848px #FFF , 953px 980px #FFF , 935px 443px #FFF , 1339px 356px #FFF , 511px 1926px #FFF , 351px 116px #FFF , 1281px 1982px #FFF , 1379px 800px #FFF , 1879px 1648px #FFF , 815px 1327px #FFF , 1587px 1262px #FFF , 1821px 503px #FFF , 749px 1976px #FFF , 1389px 469px #FFF , 239px 949px #FFF , 1449px 1443px #FFF , 1688px 4px #FFF , 1052px 35px #FFF , 1079px 1374px #FFF , 80px 275px #FFF , 364px 1854px #FFF , 152px 1621px #FFF , 405px 641px #FFF , 1047px 232px #FFF , 1025px 195px #FFF , 598px 1026px #FFF , 1770px 1245px #FFF , 929px 983px #FFF , 824px 1639px #FFF , 1863px 99px #FFF , 556px 662px #FFF , 1551px 1833px #FFF , 104px 1802px #FFF , 728px 454px #FFF , 278px 404px #FFF , 640px 769px #FFF , 1004px 69px #FFF , 824px 1377px #FFF , 1607px 843px #FFF , 188px 662px #FFF , 1824px 319px #FFF , 1639px 1115px #FFF , 1710px 768px #FFF , 640px 1723px #FFF , 1513px 1422px #FFF , 1069px 36px #FFF , 1891px 1940px #FFF , 727px 121px #FFF , 1416px 729px #FFF , 1679px 1083px #FFF , 1579px 76px #FFF , 74px 768px #FFF , 1186px 340px #FFF , 757px 110px #FFF , 1477px 425px #FFF , 1701px 245px #FFF , 151px 547px #FFF , 1003px 365px #FFF , 897px 1225px #FFF , 29px 364px #FFF , 1628px 1046px #FFF , 187px 54px #FFF , 542px 1769px #FFF , 282px 1491px #FFF , 855px 419px #FFF , 391px 76px #FFF , 468px 847px #FFF , 1970px 1579px #FFF , 1593px 209px #FFF , 1395px 908px #FFF , 1570px 1649px #FFF , 859px 1157px #FFF , 1270px 932px #FFF , 101px 1128px #FFF , 1956px 618px #FFF , 1718px 118px #FFF , 1879px 842px #FFF , 870px 1657px #FFF , 580px 1685px #FFF , 1387px 1826px #FFF , 504px 371px #FFF , 6px 1742px #FFF , 1643px 499px #FFF , 1060px 224px #FFF , 420px 1880px #FFF , 310px 889px #FFF , 1509px 1105px #FFF , 276px 131px #FFF , 336px 1626px #FFF , 1623px 881px #FFF , 1095px 824px #FFF , 1642px 674px #FFF , 1363px 1519px #FFF , 97px 1275px #FFF , 547px 916px #FFF , 672px 211px #FFF , 895px 1158px #FFF , 309px 1435px #FFF , 1698px 1621px #FFF , 878px 533px #FFF , 890px 1357px #FFF , 525px 1411px #FFF , 1059px 1324px #FFF , 507px 1710px #FFF , 228px 1600px #FFF , 1038px 317px #FFF , 1915px 1433px #FFF , 1266px 132px #FFF , 512px 762px #FFF , 1697px 1431px #FFF , 185px 428px #FFF , 486px 1415px #FFF , 151px 478px #FFF , 1265px 1962px #FFF , 661px 390px #FFF , 1615px 549px #FFF , 320px 1349px #FFF , 8px 1354px #FFF , 1460px 456px #FFF , 1404px 906px #FFF , 139px 1471px #FFF , 1528px 1163px #FFF , 859px 1411px #FFF , 888px 171px #FFF , 730px 1995px #FFF , 1222px 1770px #FFF , 1940px 957px #FFF , 458px 1824px #FFF , 1313px 479px #FFF , 660px 1755px #FFF , 650px 338px #FFF , 935px 512px #FFF , 1758px 487px #FFF , 1369px 1287px #FFF , 1431px 1163px #FFF , 393px 661px #FFF , 1586px 158px #FFF , 1107px 510px #FFF , 943px 940px #FFF , 217px 1611px #FFF , 383px 545px #FFF , 3px 1679px #FFF , 1155px 645px #FFF , 604px 959px #FFF , 1663px 435px #FFF , 847px 1111px #FFF , 1829px 200px #FFF , 1294px 1318px #FFF , 1907px 1734px #FFF , 1011px 1966px #FFF , 155px 800px #FFF , 668px 331px #FFF , 1637px 710px #FFF , 1761px 1206px #FFF , 856px 1485px #FFF , 1131px 1160px #FFF , 711px 57px #FFF , 1834px 1914px #FFF , 1748px 1546px #FFF , 1445px 1439px #FFF , 1965px 1584px #FFF , 552px 223px #FFF , 731px 950px #FFF , 234px 956px #FFF , 613px 813px #FFF , 372px 135px #FFF , 1835px 590px #FFF , 757px 1775px #FFF , 739px 1726px #FFF , 329px 974px #FFF , 1345px 528px #FFF , 879px 730px #FFF , 88px 1760px #FFF , 1025px 9px #FFF , 1764px 1029px #FFF , 240px 638px #FFF , 1404px 1457px #FFF , 1237px 1997px #FFF , 1561px 939px #FFF , 492px 1491px #FFF , 645px 737px #FFF , 1760px 1252px #FFF , 173px 1316px #FFF , 388px 1973px #FFF , 141px 1179px #FFF , 434px 1974px #FFF , 6px 1190px #FFF;
  animation: animStar 50s linear infinite;
}
#stars:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 1589px 771px #FFF , 363px 759px #FFF , 1535px 66px #FFF , 321px 540px #FFF , 1096px 99px #FFF , 1112px 848px #FFF , 1475px 1809px #FFF , 1570px 1059px #FFF , 1100px 119px #FFF , 1193px 1745px #FFF , 1262px 1036px #FFF , 1711px 102px #FFF , 1872px 69px #FFF , 1832px 1794px #FFF , 65px 1306px #FFF , 496px 1659px #FFF , 1997px 526px #FFF , 540px 1773px #FFF , 41px 700px #FFF , 1924px 1817px #FFF , 1424px 765px #FFF , 1125px 1213px #FFF , 291px 243px #FFF , 1700px 40px #FFF , 90px 526px #FFF , 468px 1181px #FFF , 176px 1172px #FFF , 550px 111px #FFF , 1746px 958px #FFF , 829px 1898px #FFF , 1197px 932px #FFF , 1147px 950px #FFF , 397px 1236px #FFF , 1684px 1379px #FFF , 1362px 1358px #FFF , 1457px 202px #FFF , 1467px 1894px #FFF , 1950px 94px #FFF , 1567px 1288px #FFF , 990px 1266px #FFF , 1866px 25px #FFF , 1099px 1691px #FFF , 876px 660px #FFF , 325px 1645px #FFF , 1578px 1612px #FFF , 1269px 1289px #FFF , 1771px 367px #FFF , 498px 746px #FFF , 1260px 836px #FFF , 1002px 264px #FFF , 1731px 1234px #FFF , 1389px 1899px #FFF , 1447px 149px #FFF , 713px 250px #FFF , 579px 497px #FFF , 1853px 383px #FFF , 1816px 1558px #FFF , 1050px 468px #FFF , 760px 1492px #FFF , 1322px 298px #FFF , 1198px 1619px #FFF , 31px 167px #FFF , 580px 880px #FFF , 140px 1810px #FFF , 926px 1199px #FFF , 1462px 1206px #FFF , 260px 1843px #FFF , 411px 415px #FFF , 1583px 486px #FFF , 727px 836px #FFF , 309px 1831px #FFF , 1521px 399px #FFF , 364px 164px #FFF , 309px 1961px #FFF , 217px 749px #FFF , 1395px 641px #FFF , 1678px 545px #FFF , 757px 1759px #FFF , 1165px 1716px #FFF , 1603px 1013px #FFF , 977px 765px #FFF , 581px 765px #FFF , 1419px 1880px #FFF , 426px 557px #FFF , 7px 885px #FFF , 699px 1934px #FFF , 40px 1899px #FFF , 1509px 696px #FFF , 131px 442px #FFF , 505px 840px #FFF , 536px 513px #FFF , 1942px 1751px #FFF , 1949px 915px #FFF , 1986px 391px #FFF , 1875px 1303px #FFF , 363px 471px #FFF , 847px 1250px #FFF , 1180px 1548px #FFF , 427px 379px #FFF , 714px 892px #FFF , 1624px 1754px #FFF , 1268px 328px #FFF , 1651px 1562px #FFF , 1823px 1799px #FFF , 461px 1294px #FFF , 1656px 1455px #FFF , 256px 1903px #FFF , 547px 189px #FFF , 1043px 133px #FFF , 740px 1288px #FFF , 1552px 1504px #FFF , 558px 823px #FFF , 1660px 1735px #FFF , 1506px 342px #FFF , 165px 1009px #FFF , 1266px 260px #FFF , 163px 1646px #FFF , 772px 1376px #FFF , 1026px 672px #FFF , 608px 728px #FFF , 420px 1311px #FFF , 1065px 1956px #FFF , 1156px 154px #FFF , 1014px 442px #FFF , 526px 98px #FFF , 305px 854px #FFF , 1104px 44px #FFF , 169px 1861px #FFF , 1556px 465px #FFF , 493px 1327px #FFF , 965px 1094px #FFF , 62px 1728px #FFF , 123px 285px #FFF , 791px 1204px #FFF , 1226px 620px #FFF , 848px 696px #FFF , 1500px 501px #FFF , 1834px 1034px #FFF , 1479px 381px #FFF , 978px 103px #FFF , 1082px 166px #FFF , 1628px 399px #FFF , 776px 628px #FFF , 1077px 1058px #FFF , 1027px 136px #FFF , 172px 301px #FFF , 1108px 1490px #FFF , 1682px 1917px #FFF , 579px 293px #FFF , 848px 1353px #FFF , 817px 780px #FFF , 1874px 718px #FFF , 117px 1123px #FFF , 1491px 886px #FFF , 1593px 195px #FFF , 308px 1583px #FFF , 1491px 1781px #FFF , 990px 1073px #FFF , 958px 57px #FFF , 72px 1093px #FFF , 1562px 36px #FFF , 129px 1640px #FFF , 1727px 1647px #FFF , 1842px 364px #FFF , 1919px 1206px #FFF , 1817px 1613px #FFF , 1270px 674px #FFF , 836px 892px #FFF , 1733px 267px #FFF , 731px 1663px #FFF , 1483px 1039px #FFF , 467px 109px #FFF , 882px 1827px #FFF , 161px 19px #FFF , 260px 997px #FFF , 130px 1652px #FFF , 1916px 368px #FFF , 286px 1044px #FFF , 1424px 617px #FFF , 1302px 1140px #FFF , 16px 493px #FFF , 1509px 1341px #FFF , 433px 959px #FFF , 297px 166px #FFF , 113px 310px #FFF , 137px 1113px #FFF , 778px 994px #FFF , 1786px 674px #FFF , 417px 1765px #FFF , 1036px 1927px #FFF , 1773px 74px #FFF , 1877px 1629px #FFF , 1229px 649px #FFF , 1939px 1209px #FFF , 505px 227px #FFF , 403px 1505px #FFF , 735px 1953px #FFF , 1059px 1463px #FFF , 396px 604px #FFF , 827px 1193px #FFF , 1812px 1359px #FFF , 1604px 328px #FFF , 122px 668px #FFF , 417px 1400px #FFF , 1251px 433px #FFF , 1484px 573px #FFF , 1048px 1870px #FFF , 1450px 241px #FFF , 943px 1418px #FFF , 465px 1378px #FFF , 1111px 1396px #FFF , 1225px 1639px #FFF , 583px 1142px #FFF , 722px 1611px #FFF , 678px 979px #FFF , 1993px 432px #FFF , 87px 106px #FFF , 1482px 1736px #FFF , 638px 954px #FFF , 718px 1255px #FFF , 492px 1220px #FFF , 1407px 28px #FFF , 1063px 208px #FFF , 401px 33px #FFF , 425px 984px #FFF , 1139px 933px #FFF , 194px 547px #FFF , 196px 889px #FFF , 830px 1618px #FFF , 692px 397px #FFF , 11px 174px #FFF , 551px 1533px #FFF , 1385px 1578px #FFF , 1932px 385px #FFF , 1065px 1445px #FFF , 1574px 398px #FFF , 1517px 769px #FFF , 1764px 501px #FFF , 1141px 1880px #FFF , 54px 39px #FFF , 940px 1363px #FFF , 777px 1645px #FFF , 244px 31px #FFF , 1503px 880px #FFF , 27px 681px #FFF , 796px 1725px #FFF , 429px 801px #FFF , 693px 862px #FFF , 1825px 1936px #FFF , 425px 471px #FFF , 566px 649px #FFF , 641px 21px #FFF , 1200px 1044px #FFF , 1977px 1161px #FFF , 1359px 1809px #FFF , 1641px 986px #FFF , 760px 1080px #FFF , 1822px 1644px #FFF , 904px 443px #FFF , 1500px 1620px #FFF , 1654px 1215px #FFF , 998px 1598px #FFF , 1187px 395px #FFF , 1680px 298px #FFF , 1420px 1411px #FFF , 374px 374px #FFF , 878px 1812px #FFF , 420px 1018px #FFF , 222px 1659px #FFF , 1983px 313px #FFF , 1464px 1908px #FFF , 1873px 1221px #FFF , 1801px 1630px #FFF , 1497px 189px #FFF , 1016px 649px #FFF , 237px 1295px #FFF , 977px 780px #FFF , 1355px 651px #FFF , 791px 696px #FFF , 1666px 566px #FFF , 370px 1233px #FFF , 671px 1332px #FFF , 1517px 1043px #FFF , 324px 541px #FFF , 707px 1862px #FFF , 771px 1212px #FFF , 1243px 1705px #FFF , 604px 1123px #FFF , 1773px 1979px #FFF , 1509px 340px #FFF , 1869px 143px #FFF , 725px 604px #FFF , 1650px 946px #FFF , 1625px 246px #FFF , 402px 1031px #FFF , 1231px 288px #FFF , 1510px 504px #FFF , 1051px 1247px #FFF , 277px 164px #FFF , 1149px 1314px #FFF , 1483px 527px #FFF , 164px 1007px #FFF , 217px 1036px #FFF , 1512px 1288px #FFF , 607px 1423px #FFF , 1019px 296px #FFF , 192px 1409px #FFF , 259px 648px #FFF , 501px 1720px #FFF , 1868px 1308px #FFF , 430px 1976px #FFF , 918px 1676px #FFF , 925px 1672px #FFF , 242px 1315px #FFF , 1485px 1922px #FFF , 1960px 103px #FFF , 778px 1808px #FFF , 43px 1857px #FFF , 1382px 283px #FFF , 1040px 1452px #FFF , 497px 1019px #FFF , 287px 668px #FFF , 396px 875px #FFF , 1956px 971px #FFF , 1456px 1219px #FFF , 1047px 803px #FFF , 1795px 72px #FFF , 1465px 333px #FFF , 948px 1899px #FFF , 405px 926px #FFF , 869px 96px #FFF , 1129px 258px #FFF , 822px 493px #FFF , 309px 1679px #FFF , 706px 1883px #FFF , 772px 493px #FFF , 1793px 981px #FFF , 1681px 91px #FFF , 351px 214px #FFF , 1348px 1156px #FFF , 1027px 1252px #FFF , 305px 1663px #FFF , 6px 697px #FFF , 468px 507px #FFF , 1274px 1938px #FFF , 94px 495px #FFF , 139px 765px #FFF , 1935px 405px #FFF , 611px 1863px #FFF , 1203px 161px #FFF , 1695px 234px #FFF , 203px 1832px #FFF , 1858px 1866px #FFF , 946px 1888px #FFF , 1530px 991px #FFF , 502px 1858px #FFF , 1744px 1045px #FFF , 1205px 1462px #FFF , 1510px 502px #FFF , 1310px 316px #FFF , 1802px 83px #FFF , 553px 424px #FFF , 39px 56px #FFF , 956px 1174px #FFF , 1199px 1816px #FFF , 1859px 242px #FFF , 748px 1397px #FFF , 982px 182px #FFF , 183px 1389px #FFF , 1562px 1510px #FFF , 1139px 927px #FFF , 770px 1131px #FFF , 1137px 1935px #FFF , 406px 1784px #FFF , 1467px 1861px #FFF , 1005px 1294px #FFF , 477px 1377px #FFF , 81px 64px #FFF , 1013px 558px #FFF , 838px 1347px #FFF , 697px 94px #FFF , 1295px 98px #FFF , 1469px 595px #FFF , 1440px 1839px #FFF , 1403px 1851px #FFF , 1779px 350px #FFF , 1009px 1139px #FFF , 1960px 193px #FFF , 831px 344px #FFF , 1955px 927px #FFF , 1343px 1581px #FFF , 1587px 619px #FFF , 54px 1801px #FFF , 153px 1890px #FFF , 1517px 620px #FFF , 1270px 1964px #FFF , 792px 1066px #FFF , 177px 130px #FFF , 1322px 940px #FFF , 1088px 1512px #FFF , 903px 59px #FFF , 298px 1170px #FFF , 1305px 118px #FFF , 766px 1015px #FFF , 668px 1458px #FFF , 1370px 1122px #FFF , 1175px 1031px #FFF , 1478px 996px #FFF , 22px 436px #FFF , 1680px 1320px #FFF , 264px 1198px #FFF , 1413px 1836px #FFF , 609px 838px #FFF , 417px 633px #FFF , 532px 375px #FFF , 804px 1678px #FFF , 1184px 1909px #FFF , 830px 465px #FFF , 1404px 626px #FFF , 689px 1528px #FFF , 1962px 1021px #FFF , 672px 941px #FFF , 1102px 1697px #FFF , 177px 1657px #FFF , 1410px 903px #FFF , 1304px 171px #FFF , 1339px 1537px #FFF , 1679px 1208px #FFF , 416px 1671px #FFF , 221px 1938px #FFF , 1565px 1724px #FFF , 1468px 1015px #FFF , 294px 1360px #FFF , 173px 1534px #FFF , 1484px 1131px #FFF , 1323px 640px #FFF , 233px 463px #FFF , 870px 1880px #FFF , 1915px 477px #FFF , 224px 406px #FFF , 1127px 1841px #FFF , 49px 16px #FFF , 511px 1360px #FFF , 785px 1886px #FFF , 715px 408px #FFF , 913px 1088px #FFF , 1573px 383px #FFF , 1431px 619px #FFF , 830px 1344px #FFF , 1970px 1495px #FFF , 1493px 698px #FFF , 2000px 668px #FFF , 1207px 901px #FFF , 470px 32px #FFF , 306px 41px #FFF , 192px 696px #FFF , 930px 1986px #FFF , 1338px 796px #FFF , 795px 1147px #FFF , 1617px 579px #FFF , 1810px 722px #FFF , 1270px 50px #FFF , 1711px 53px #FFF , 1317px 69px #FFF , 726px 375px #FFF , 1880px 917px #FFF , 869px 243px #FFF , 1241px 337px #FFF , 700px 1379px #FFF , 346px 252px #FFF , 381px 406px #FFF , 616px 511px #FFF , 846px 1507px #FFF , 1465px 1115px #FFF , 239px 782px #FFF , 1103px 957px #FFF , 900px 1706px #FFF , 976px 1666px #FFF , 1635px 1338px #FFF , 1175px 1102px #FFF , 770px 1146px #FFF , 1270px 1644px #FFF , 1261px 630px #FFF , 708px 976px #FFF , 556px 958px #FFF , 259px 1237px #FFF , 1176px 486px #FFF , 1389px 232px #FFF , 1623px 703px #FFF , 165px 954px #FFF , 1049px 795px #FFF , 826px 1122px #FFF , 1056px 430px #FFF , 1678px 477px #FFF , 828px 69px #FFF , 492px 1445px #FFF , 1935px 1484px #FFF , 667px 1880px #FFF , 391px 710px #FFF , 1407px 131px #FFF , 437px 370px #FFF , 54px 492px #FFF , 611px 1068px #FFF , 250px 1509px #FFF , 334px 643px #FFF , 187px 1876px #FFF , 1272px 1914px #FFF , 750px 909px #FFF , 1324px 1247px #FFF , 311px 1315px #FFF , 1104px 667px #FFF , 349px 293px #FFF , 624px 1333px #FFF , 825px 848px #FFF , 953px 980px #FFF , 935px 443px #FFF , 1339px 356px #FFF , 511px 1926px #FFF , 351px 116px #FFF , 1281px 1982px #FFF , 1379px 800px #FFF , 1879px 1648px #FFF , 815px 1327px #FFF , 1587px 1262px #FFF , 1821px 503px #FFF , 749px 1976px #FFF , 1389px 469px #FFF , 239px 949px #FFF , 1449px 1443px #FFF , 1688px 4px #FFF , 1052px 35px #FFF , 1079px 1374px #FFF , 80px 275px #FFF , 364px 1854px #FFF , 152px 1621px #FFF , 405px 641px #FFF , 1047px 232px #FFF , 1025px 195px #FFF , 598px 1026px #FFF , 1770px 1245px #FFF , 929px 983px #FFF , 824px 1639px #FFF , 1863px 99px #FFF , 556px 662px #FFF , 1551px 1833px #FFF , 104px 1802px #FFF , 728px 454px #FFF , 278px 404px #FFF , 640px 769px #FFF , 1004px 69px #FFF , 824px 1377px #FFF , 1607px 843px #FFF , 188px 662px #FFF , 1824px 319px #FFF , 1639px 1115px #FFF , 1710px 768px #FFF , 640px 1723px #FFF , 1513px 1422px #FFF , 1069px 36px #FFF , 1891px 1940px #FFF , 727px 121px #FFF , 1416px 729px #FFF , 1679px 1083px #FFF , 1579px 76px #FFF , 74px 768px #FFF , 1186px 340px #FFF , 757px 110px #FFF , 1477px 425px #FFF , 1701px 245px #FFF , 151px 547px #FFF , 1003px 365px #FFF , 897px 1225px #FFF , 29px 364px #FFF , 1628px 1046px #FFF , 187px 54px #FFF , 542px 1769px #FFF , 282px 1491px #FFF , 855px 419px #FFF , 391px 76px #FFF , 468px 847px #FFF , 1970px 1579px #FFF , 1593px 209px #FFF , 1395px 908px #FFF , 1570px 1649px #FFF , 859px 1157px #FFF , 1270px 932px #FFF , 101px 1128px #FFF , 1956px 618px #FFF , 1718px 118px #FFF , 1879px 842px #FFF , 870px 1657px #FFF , 580px 1685px #FFF , 1387px 1826px #FFF , 504px 371px #FFF , 6px 1742px #FFF , 1643px 499px #FFF , 1060px 224px #FFF , 420px 1880px #FFF , 310px 889px #FFF , 1509px 1105px #FFF , 276px 131px #FFF , 336px 1626px #FFF , 1623px 881px #FFF , 1095px 824px #FFF , 1642px 674px #FFF , 1363px 1519px #FFF , 97px 1275px #FFF , 547px 916px #FFF , 672px 211px #FFF , 895px 1158px #FFF , 309px 1435px #FFF , 1698px 1621px #FFF , 878px 533px #FFF , 890px 1357px #FFF , 525px 1411px #FFF , 1059px 1324px #FFF , 507px 1710px #FFF , 228px 1600px #FFF , 1038px 317px #FFF , 1915px 1433px #FFF , 1266px 132px #FFF , 512px 762px #FFF , 1697px 1431px #FFF , 185px 428px #FFF , 486px 1415px #FFF , 151px 478px #FFF , 1265px 1962px #FFF , 661px 390px #FFF , 1615px 549px #FFF , 320px 1349px #FFF , 8px 1354px #FFF , 1460px 456px #FFF , 1404px 906px #FFF , 139px 1471px #FFF , 1528px 1163px #FFF , 859px 1411px #FFF , 888px 171px #FFF , 730px 1995px #FFF , 1222px 1770px #FFF , 1940px 957px #FFF , 458px 1824px #FFF , 1313px 479px #FFF , 660px 1755px #FFF , 650px 338px #FFF , 935px 512px #FFF , 1758px 487px #FFF , 1369px 1287px #FFF , 1431px 1163px #FFF , 393px 661px #FFF , 1586px 158px #FFF , 1107px 510px #FFF , 943px 940px #FFF , 217px 1611px #FFF , 383px 545px #FFF , 3px 1679px #FFF , 1155px 645px #FFF , 604px 959px #FFF , 1663px 435px #FFF , 847px 1111px #FFF , 1829px 200px #FFF , 1294px 1318px #FFF , 1907px 1734px #FFF , 1011px 1966px #FFF , 155px 800px #FFF , 668px 331px #FFF , 1637px 710px #FFF , 1761px 1206px #FFF , 856px 1485px #FFF , 1131px 1160px #FFF , 711px 57px #FFF , 1834px 1914px #FFF , 1748px 1546px #FFF , 1445px 1439px #FFF , 1965px 1584px #FFF , 552px 223px #FFF , 731px 950px #FFF , 234px 956px #FFF , 613px 813px #FFF , 372px 135px #FFF , 1835px 590px #FFF , 757px 1775px #FFF , 739px 1726px #FFF , 329px 974px #FFF , 1345px 528px #FFF , 879px 730px #FFF , 88px 1760px #FFF , 1025px 9px #FFF , 1764px 1029px #FFF , 240px 638px #FFF , 1404px 1457px #FFF , 1237px 1997px #FFF , 1561px 939px #FFF , 492px 1491px #FFF , 645px 737px #FFF , 1760px 1252px #FFF , 173px 1316px #FFF , 388px 1973px #FFF , 141px 1179px #FFF , 434px 1974px #FFF , 6px 1190px #FFF;
}

#stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 1051px 1958px #FFF , 1207px 1515px #FFF , 1658px 1270px #FFF , 893px 1075px #FFF , 872px 686px #FFF , 1222px 1831px #FFF , 94px 629px #FFF , 449px 178px #FFF , 489px 679px #FFF , 396px 1223px #FFF , 188px 1222px #FFF , 59px 733px #FFF , 1494px 1157px #FFF , 615px 188px #FFF , 1109px 1115px #FFF , 1843px 1464px #FFF , 1658px 562px #FFF , 1833px 1092px #FFF , 225px 776px #FFF , 835px 198px #FFF , 1640px 175px #FFF , 1845px 291px #FFF , 53px 175px #FFF , 1550px 1274px #FFF , 709px 721px #FFF , 254px 1595px #FFF , 1016px 1643px #FFF , 52px 1604px #FFF , 1221px 1900px #FFF , 906px 758px #FFF , 1296px 1646px #FFF , 1208px 1491px #FFF , 413px 1063px #FFF , 1406px 21px #FFF , 618px 54px #FFF , 510px 494px #FFF , 1248px 329px #FFF , 876px 974px #FFF , 1665px 516px #FFF , 498px 1348px #FFF , 1947px 828px #FFF , 33px 985px #FFF , 1260px 220px #FFF , 1726px 1619px #FFF , 1586px 1025px #FFF , 161px 1877px #FFF , 1257px 732px #FFF , 580px 1594px #FFF , 1842px 301px #FFF , 1625px 118px #FFF , 603px 1081px #FFF , 514px 1328px #FFF , 1760px 1788px #FFF , 994px 626px #FFF , 1974px 1219px #FFF , 1172px 302px #FFF , 263px 781px #FFF , 805px 1622px #FFF , 775px 1008px #FFF , 571px 692px #FFF , 1302px 1252px #FFF , 847px 861px #FFF , 1155px 1143px #FFF , 1168px 402px #FFF , 1000px 1093px #FFF , 962px 958px #FFF , 1004px 1222px #FFF , 1445px 1138px #FFF , 306px 1923px #FFF , 696px 1527px #FFF , 1822px 191px #FFF , 245px 1508px #FFF , 1333px 32px #FFF , 476px 448px #FFF , 591px 1500px #FFF , 1193px 1235px #FFF , 1330px 806px #FFF , 418px 1357px #FFF , 1583px 270px #FFF , 765px 605px #FFF , 1167px 11px #FFF , 763px 1852px #FFF , 637px 1288px #FFF , 1217px 1958px #FFF , 731px 1087px #FFF , 1649px 578px #FFF , 265px 1956px #FFF , 1060px 1614px #FFF , 804px 496px #FFF , 1595px 1625px #FFF , 1942px 1829px #FFF , 1514px 1769px #FFF , 208px 1925px #FFF , 441px 856px #FFF , 9px 251px #FFF , 34px 615px #FFF , 994px 1541px #FFF , 1552px 1366px #FFF , 1571px 1916px #FFF , 395px 1265px #FFF , 1568px 22px #FFF , 1667px 1478px #FFF , 1062px 1545px #FFF , 1989px 1631px #FFF , 1803px 1021px #FFF , 60px 225px #FFF , 543px 1738px #FFF , 1993px 540px #FFF , 929px 1947px #FFF , 1124px 1379px #FFF , 930px 1826px #FFF , 1310px 1827px #FFF , 1185px 375px #FFF , 1690px 825px #FFF , 1501px 835px #FFF , 1676px 566px #FFF , 522px 265px #FFF , 1729px 289px #FFF , 1566px 773px #FFF , 756px 640px #FFF , 1741px 1466px #FFF , 1897px 624px #FFF , 1072px 1004px #FFF , 314px 957px #FFF , 1449px 932px #FFF , 601px 1196px #FFF , 1253px 669px #FFF , 362px 1787px #FFF , 1804px 1834px #FFF , 377px 1749px #FFF , 671px 1631px #FFF , 1626px 493px #FFF , 1913px 909px #FFF , 1328px 16px #FFF , 44px 659px #FFF , 1929px 885px #FFF , 116px 1102px #FFF , 636px 1753px #FFF , 1779px 886px #FFF , 573px 670px #FFF , 1613px 647px #FFF , 1747px 886px #FFF , 1193px 856px #FFF , 316px 875px #FFF , 1595px 485px #FFF , 302px 383px #FFF , 1559px 1206px #FFF , 1372px 198px #FFF , 1359px 862px #FFF , 45px 1521px #FFF , 405px 1484px #FFF , 1356px 366px #FFF , 333px 343px #FFF , 793px 1724px #FFF , 692px 404px #FFF , 968px 771px #FFF , 408px 693px #FFF , 554px 126px #FFF , 1490px 1965px #FFF , 1477px 1267px #FFF , 1757px 701px #FFF , 71px 1484px #FFF , 1621px 896px #FFF , 168px 307px #FFF , 1590px 1629px #FFF , 1795px 179px #FFF , 505px 396px #FFF , 896px 64px #FFF , 430px 1062px #FFF , 1485px 760px #FFF , 421px 1328px #FFF , 1289px 805px #FFF , 28px 848px #FFF , 1278px 14px #FFF , 1713px 725px #FFF , 1274px 1705px #FFF , 616px 1426px #FFF , 1651px 1316px #FFF , 1926px 806px #FFF , 457px 1998px #FFF , 1115px 1967px #FFF , 1414px 233px #FFF , 945px 1278px #FFF , 611px 616px #FFF , 1739px 1794px #FFF , 1704px 1878px #FFF , 559px 1071px #FFF , 456px 1291px #FFF , 592px 576px #FFF , 106px 474px #FFF , 584px 1122px #FFF , 872px 1870px #FFF , 1673px 1232px #FFF , 507px 1493px #FFF , 154px 1106px #FFF , 938px 1165px #FFF , 100px 437px #FFF , 1432px 610px #FFF , 1698px 1720px #FFF , 1126px 1728px #FFF;
  animation: animStar 100s linear infinite;
}
#stars2:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 1051px 1958px #FFF , 1207px 1515px #FFF , 1658px 1270px #FFF , 893px 1075px #FFF , 872px 686px #FFF , 1222px 1831px #FFF , 94px 629px #FFF , 449px 178px #FFF , 489px 679px #FFF , 396px 1223px #FFF , 188px 1222px #FFF , 59px 733px #FFF , 1494px 1157px #FFF , 615px 188px #FFF , 1109px 1115px #FFF , 1843px 1464px #FFF , 1658px 562px #FFF , 1833px 1092px #FFF , 225px 776px #FFF , 835px 198px #FFF , 1640px 175px #FFF , 1845px 291px #FFF , 53px 175px #FFF , 1550px 1274px #FFF , 709px 721px #FFF , 254px 1595px #FFF , 1016px 1643px #FFF , 52px 1604px #FFF , 1221px 1900px #FFF , 906px 758px #FFF , 1296px 1646px #FFF , 1208px 1491px #FFF , 413px 1063px #FFF , 1406px 21px #FFF , 618px 54px #FFF , 510px 494px #FFF , 1248px 329px #FFF , 876px 974px #FFF , 1665px 516px #FFF , 498px 1348px #FFF , 1947px 828px #FFF , 33px 985px #FFF , 1260px 220px #FFF , 1726px 1619px #FFF , 1586px 1025px #FFF , 161px 1877px #FFF , 1257px 732px #FFF , 580px 1594px #FFF , 1842px 301px #FFF , 1625px 118px #FFF , 603px 1081px #FFF , 514px 1328px #FFF , 1760px 1788px #FFF , 994px 626px #FFF , 1974px 1219px #FFF , 1172px 302px #FFF , 263px 781px #FFF , 805px 1622px #FFF , 775px 1008px #FFF , 571px 692px #FFF , 1302px 1252px #FFF , 847px 861px #FFF , 1155px 1143px #FFF , 1168px 402px #FFF , 1000px 1093px #FFF , 962px 958px #FFF , 1004px 1222px #FFF , 1445px 1138px #FFF , 306px 1923px #FFF , 696px 1527px #FFF , 1822px 191px #FFF , 245px 1508px #FFF , 1333px 32px #FFF , 476px 448px #FFF , 591px 1500px #FFF , 1193px 1235px #FFF , 1330px 806px #FFF , 418px 1357px #FFF , 1583px 270px #FFF , 765px 605px #FFF , 1167px 11px #FFF , 763px 1852px #FFF , 637px 1288px #FFF , 1217px 1958px #FFF , 731px 1087px #FFF , 1649px 578px #FFF , 265px 1956px #FFF , 1060px 1614px #FFF , 804px 496px #FFF , 1595px 1625px #FFF , 1942px 1829px #FFF , 1514px 1769px #FFF , 208px 1925px #FFF , 441px 856px #FFF , 9px 251px #FFF , 34px 615px #FFF , 994px 1541px #FFF , 1552px 1366px #FFF , 1571px 1916px #FFF , 395px 1265px #FFF , 1568px 22px #FFF , 1667px 1478px #FFF , 1062px 1545px #FFF , 1989px 1631px #FFF , 1803px 1021px #FFF , 60px 225px #FFF , 543px 1738px #FFF , 1993px 540px #FFF , 929px 1947px #FFF , 1124px 1379px #FFF , 930px 1826px #FFF , 1310px 1827px #FFF , 1185px 375px #FFF , 1690px 825px #FFF , 1501px 835px #FFF , 1676px 566px #FFF , 522px 265px #FFF , 1729px 289px #FFF , 1566px 773px #FFF , 756px 640px #FFF , 1741px 1466px #FFF , 1897px 624px #FFF , 1072px 1004px #FFF , 314px 957px #FFF , 1449px 932px #FFF , 601px 1196px #FFF , 1253px 669px #FFF , 362px 1787px #FFF , 1804px 1834px #FFF , 377px 1749px #FFF , 671px 1631px #FFF , 1626px 493px #FFF , 1913px 909px #FFF , 1328px 16px #FFF , 44px 659px #FFF , 1929px 885px #FFF , 116px 1102px #FFF , 636px 1753px #FFF , 1779px 886px #FFF , 573px 670px #FFF , 1613px 647px #FFF , 1747px 886px #FFF , 1193px 856px #FFF , 316px 875px #FFF , 1595px 485px #FFF , 302px 383px #FFF , 1559px 1206px #FFF , 1372px 198px #FFF , 1359px 862px #FFF , 45px 1521px #FFF , 405px 1484px #FFF , 1356px 366px #FFF , 333px 343px #FFF , 793px 1724px #FFF , 692px 404px #FFF , 968px 771px #FFF , 408px 693px #FFF , 554px 126px #FFF , 1490px 1965px #FFF , 1477px 1267px #FFF , 1757px 701px #FFF , 71px 1484px #FFF , 1621px 896px #FFF , 168px 307px #FFF , 1590px 1629px #FFF , 1795px 179px #FFF , 505px 396px #FFF , 896px 64px #FFF , 430px 1062px #FFF , 1485px 760px #FFF , 421px 1328px #FFF , 1289px 805px #FFF , 28px 848px #FFF , 1278px 14px #FFF , 1713px 725px #FFF , 1274px 1705px #FFF , 616px 1426px #FFF , 1651px 1316px #FFF , 1926px 806px #FFF , 457px 1998px #FFF , 1115px 1967px #FFF , 1414px 233px #FFF , 945px 1278px #FFF , 611px 616px #FFF , 1739px 1794px #FFF , 1704px 1878px #FFF , 559px 1071px #FFF , 456px 1291px #FFF , 592px 576px #FFF , 106px 474px #FFF , 584px 1122px #FFF , 872px 1870px #FFF , 1673px 1232px #FFF , 507px 1493px #FFF , 154px 1106px #FFF , 938px 1165px #FFF , 100px 437px #FFF , 1432px 610px #FFF , 1698px 1720px #FFF , 1126px 1728px #FFF;
}

#stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 726px 936px #FFF , 1218px 92px #FFF , 1055px 1423px #FFF , 109px 540px #FFF , 1645px 306px #FFF , 724px 515px #FFF , 1637px 1938px #FFF , 377px 652px #FFF , 141px 259px #FFF , 1949px 71px #FFF , 1150px 157px #FFF , 299px 146px #FFF , 590px 1453px #FFF , 488px 1983px #FFF , 1229px 1692px #FFF , 1270px 282px #FFF , 1602px 1339px #FFF , 178px 1726px #FFF , 1615px 611px #FFF , 916px 1406px #FFF , 952px 192px #FFF , 636px 1290px #FFF , 304px 1809px #FFF , 1472px 1484px #FFF , 1476px 583px #FFF , 1799px 726px #FFF , 1985px 1650px #FFF , 1304px 1009px #FFF , 1788px 564px #FFF , 1631px 1956px #FFF , 618px 577px #FFF , 1419px 1288px #FFF , 1292px 1498px #FFF , 1300px 490px #FFF , 912px 599px #FFF , 1833px 237px #FFF , 28px 1027px #FFF , 1434px 1296px #FFF , 1812px 250px #FFF , 499px 838px #FFF , 356px 518px #FFF , 189px 363px #FFF , 1039px 1081px #FFF , 560px 1345px #FFF , 1330px 717px #FFF , 1147px 196px #FFF , 739px 822px #FFF , 99px 1024px #FFF , 595px 131px #FFF , 395px 631px #FFF , 113px 1541px #FFF , 1857px 380px #FFF , 1322px 1433px #FFF , 772px 1685px #FFF , 1424px 193px #FFF , 690px 1405px #FFF , 11px 1867px #FFF , 1171px 225px #FFF , 404px 407px #FFF , 650px 193px #FFF , 229px 1575px #FFF , 567px 208px #FFF , 1655px 1538px #FFF , 698px 1739px #FFF , 1695px 476px #FFF , 786px 777px #FFF , 35px 1005px #FFF , 1620px 228px #FFF , 712px 168px #FFF , 1587px 1903px #FFF , 1241px 850px #FFF , 254px 1098px #FFF , 1850px 888px #FFF , 918px 1961px #FFF , 1199px 895px #FFF , 8px 1421px #FFF , 1734px 710px #FFF , 356px 1098px #FFF , 1488px 1237px #FFF , 1697px 724px #FFF , 1847px 1430px #FFF , 1327px 1184px #FFF , 1838px 879px #FFF , 1149px 1092px #FFF , 1903px 1692px #FFF , 1251px 1517px #FFF , 547px 1933px #FFF , 690px 1671px #FFF , 907px 490px #FFF , 1822px 738px #FFF , 757px 988px #FFF , 1867px 133px #FFF , 1292px 1939px #FFF , 322px 1093px #FFF , 1480px 1953px #FFF , 1697px 1715px #FFF , 1420px 958px #FFF , 1000px 1164px #FFF , 844px 895px #FFF , 934px 1264px #FFF;
  animation: animStar 150s linear infinite;
}
#stars3:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 726px 936px #FFF , 1218px 92px #FFF , 1055px 1423px #FFF , 109px 540px #FFF , 1645px 306px #FFF , 724px 515px #FFF , 1637px 1938px #FFF , 377px 652px #FFF , 141px 259px #FFF , 1949px 71px #FFF , 1150px 157px #FFF , 299px 146px #FFF , 590px 1453px #FFF , 488px 1983px #FFF , 1229px 1692px #FFF , 1270px 282px #FFF , 1602px 1339px #FFF , 178px 1726px #FFF , 1615px 611px #FFF , 916px 1406px #FFF , 952px 192px #FFF , 636px 1290px #FFF , 304px 1809px #FFF , 1472px 1484px #FFF , 1476px 583px #FFF , 1799px 726px #FFF , 1985px 1650px #FFF , 1304px 1009px #FFF , 1788px 564px #FFF , 1631px 1956px #FFF , 618px 577px #FFF , 1419px 1288px #FFF , 1292px 1498px #FFF , 1300px 490px #FFF , 912px 599px #FFF , 1833px 237px #FFF , 28px 1027px #FFF , 1434px 1296px #FFF , 1812px 250px #FFF , 499px 838px #FFF , 356px 518px #FFF , 189px 363px #FFF , 1039px 1081px #FFF , 560px 1345px #FFF , 1330px 717px #FFF , 1147px 196px #FFF , 739px 822px #FFF , 99px 1024px #FFF , 595px 131px #FFF , 395px 631px #FFF , 113px 1541px #FFF , 1857px 380px #FFF , 1322px 1433px #FFF , 772px 1685px #FFF , 1424px 193px #FFF , 690px 1405px #FFF , 11px 1867px #FFF , 1171px 225px #FFF , 404px 407px #FFF , 650px 193px #FFF , 229px 1575px #FFF , 567px 208px #FFF , 1655px 1538px #FFF , 698px 1739px #FFF , 1695px 476px #FFF , 786px 777px #FFF , 35px 1005px #FFF , 1620px 228px #FFF , 712px 168px #FFF , 1587px 1903px #FFF , 1241px 850px #FFF , 254px 1098px #FFF , 1850px 888px #FFF , 918px 1961px #FFF , 1199px 895px #FFF , 8px 1421px #FFF , 1734px 710px #FFF , 356px 1098px #FFF , 1488px 1237px #FFF , 1697px 724px #FFF , 1847px 1430px #FFF , 1327px 1184px #FFF , 1838px 879px #FFF , 1149px 1092px #FFF , 1903px 1692px #FFF , 1251px 1517px #FFF , 547px 1933px #FFF , 690px 1671px #FFF , 907px 490px #FFF , 1822px 738px #FFF , 757px 988px #FFF , 1867px 133px #FFF , 1292px 1939px #FFF , 322px 1093px #FFF , 1480px 1953px #FFF , 1697px 1715px #FFF , 1420px 958px #FFF , 1000px 1164px #FFF , 844px 895px #FFF , 934px 1264px #FFF;
}

#title {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  color: #FFF;
  text-align: center;
  font-family: "lato", sans-serif;
  font-weight: 300;
  font-size: 50px;
  letter-spacing: 10px;
  margin-top: -60px;
  padding-left: 10px;
}
#title span {
  background: -webkit-linear-gradient(white, #38495a);
}

@keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
}

</style>

<script setup>
definePageMeta({
  title: "Home",
});

const domains = [
  {
    title: `Game Development`,
    image: `/game_dev.svg`,
    content: `The art of creating games and describes the design, development
              and release of a game.`,
  },
  {
    title: `Web Development`,
    image: `/web_dev.svg`,
    content: `The art of building, creating, and maintaining websites. Divided
              into two categories Front End and Back end.`,
  },
  {
    title: `DevOps`,
    image: `/devops.svg`,
    content: `The combination of cultural philosophies, practices, and tools that increases an organization’s ability to deliver applications and services at high velocity.`,
  },
  {
    title: `App Development`,
    image: `/app.svg`,
    content: `Covers both Mobile app and system app development. Application software addresses the end user and provides features to perform specific tasks and activities.`,
  },{
    title: `Artificial Intelligence`,
    image: `/3dmod.svg`,
    content: `The concept of developing machines to mimic human nature and behavior. Make machines to think like us, to take decisions like us, to understand and express the human emotions like us.`,
  },
  {
    title: `Data Science`,
    image: `/ds.svg`,
    content: `The art of extracting knowledge and insights from a set of data respective to its type. Plays a major role in the ongoing information era and in Artificial Intelligence.`,
  },{
    title: `Machine Learning`,
    image: `/ml.svg`,
    content: `The use and development of computer systems that are able to learn and adapt without following explicit instructions, by using algorithms and statistical models to analyse and draw inferences from patterns in data.`,
  },
  {
    title: `Cloud Computing`,
    image: `/cloud.svg`,
    content: `Cloud computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence over the Internet to offer faster innovation.`,
  },
  {
    title: `Documentation`,
    image: `/doc.svg`,
    content: `Documentation is any communicable material that is used to describe, explain or instruct regarding some attributes of an object, system or procedure, such as its parts, assembly, installation, maintenance and use. Every project need its own documentation.`,
  },
  {
    title: `Web 3`,
    image: `/web3.svg`,
    content: `Web3 is an idea for a new iteration of the World Wide Web which incorporates concepts such as decentralization, blockchain technologies, and token-based economics.`,
  },
  {
    title: `Blockchain`,
    image: `/blockchain.svg`,
    content: `Blockchain = Decentralization. The goal of blockchain is to allow digital information to be recorded and distributed, but not edited. Provides enhanced security, transparency, traceability, automation and efficiency.`,
  },
  {
    title: `Internet Of Things`,
    image: `/iot.svg`,
    content: `The Internet of things describes physical objects with sensors, processing ability, software, and other technologies that connect and exchange data with other devices and systems over the Internet or other communications networks .`,
  },
  {
    title: `Cyber Security`,
    image: `/cyber.svg`,
    content: `Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users; or interrupting normal business processes.`,
  },
  {
    title: `3D Modelling`,
    image: `/3dmod.svg`,
    content: `3D modeling is the art of developing a mathematical coordinate-based representation of any surface of an object in three dimensions via specialized software by manipulating edges, vertices, and polygons in a simulated 3D space.`,
  },
  {
    title: `Testing`,
    image: `/test.svg`,
    content: `The process of evaluating and verifying that a software product or application does what it is supposed to do. The benefits of testing include preventing bugs, reducing development costs and improving performance. .`,
  }
];

</script>
<!-- 
<script>

    const resolver = {
        resolve: function resolve(options, callback) {
    // The string to resolve
            const resolveString = options.resolveString || options.element.getAttribute('data-target-resolver');
            const combinedOptions = Object.assign({}, options, {resolveString: resolveString});
            
            function getRandomInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
            };
            
            function randomCharacter(characters) {
            return characters[getRandomInteger(0, characters.length - 1)];
            };
            
            function doRandomiserEffect(options, callback) {
            const characters = options.characters;
            const timeout = options.timeout;
            const element = options.element;
            const partialString = options.partialString;

            let iterations = options.iterations;

            setTimeout(() => {
                if (iterations >= 0) {
                const nextOptions = Object.assign({}, options, {iterations: iterations - 1});

                // Ensures partialString without the random character as the final state.
                if (iterations === 0) {
                    element.textContent = partialString;
                } else {
                    // Replaces the last character of partialString with a random character
                    element.textContent = partialString.substring(0, partialString.length - 1) + randomCharacter(characters);
                }

                doRandomiserEffect(nextOptions, callback)
                } else if (typeof callback === "function") {
                callback(); 
                }
            }, options.timeout);
            };
    
    function doResolverEffect(options, callback) {
      const resolveString = options.resolveString;
      const characters = options.characters;
      const offset = options.offset;
      const partialString = resolveString.substring(0, offset);
      const combinedOptions = Object.assign({}, options, {partialString: partialString});

      doRandomiserEffect(combinedOptions, () => {
        const nextOptions = Object.assign({}, options, {offset: offset + 1});

        if (offset <= resolveString.length) {
          doResolverEffect(nextOptions, callback);
        } else if (typeof callback === "function") {
          callback();
        }
      });
    };

    doResolverEffect(combinedOptions, callback);
  } 
}

/* Some GLaDOS quotes from Portal 2 chapter 9: The Part Where He Kills You
 * Source: http://theportalwiki.com/wiki/GLaDOS_voice_lines#Chapter_9:_The_Part_Where_He_Kills_You
 */
    const strings = [
        'This is WiMaX',
        'A club initiated by the STUDENTS of artificial intelligence and data science department of Easwari Engineering college.', 
        'WiMaX is not just a club but also a COMMUNITY for our students to sharpen their skills in their interested domain and to explore new domains.',
        'Our ideology is focused on COLLECTIVE GROWTH.',
        'We help among ourselves by GAINING KNOWLEDGE from others and TEACHING their KNOWLEDGE to others.',
        'We try to bring our IDEAS to real life to make an IMPACT in our society and the world and an INSPIRATION to our younger generation.',
    ];

    let counter = 0;

    const options = {
    // Initial position
    offset: 0,
    // Timeout between each random character
    timeout: 5,
    // Number of random characters to show
    iterations: 10,
    // Random characters to pick from
    characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
    // String to resolve
    resolveString: strings[counter],
    // The element
    element: document.querySelector('[data-target-resolver]')
    }

// Callback function when resolve completes
    function callback() {
    setTimeout(() => {
        counter ++;
        
        if (counter >= strings.length) {
        counter = 0;
        }
        
        let nextOptions = Object.assign({}, options, {resolveString: strings[counter]});
        resolver.resolve(nextOptions, callback);
    }, 1000);
    }

    resolver.resolve(options, callback);

</script> -->