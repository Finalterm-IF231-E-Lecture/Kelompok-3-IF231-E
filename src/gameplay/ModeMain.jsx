import React, { useState, useEffect } from "react";
import GoTo from "./GoTo";
import News from "./News";
import ResponsiveNews from "./ResponsiveNews";
import Student from "./Student";
import Addtion from "./Addition";
import StatusBar from "./StatusBar";
import ProgressCourse from "./ProgressCourse";
import Money from "./Money";
import Time from "./Time";
import Profile from "./Profile";
import Evaluation from "./Evaluation";
import Lulus from "./Lulus";
import Supermarket from "./Supermarket";
import Cafe from "./Cafe";
import Inventory from "./Inventory";
import itemList from "./goods.json";
import Overlay from "./Overlay";
import "../css/modeMain.css";

import BackpackIcon from "../assets/assetsIcon/inventory.png";

import CafeBG from "../assets/assetsBackground/Cafe.png";
import CampusBG from "../assets/assetsBackground/Campus.png";
import HomeBG from "../assets/assetsBackground/PagiNormal.png";
import SupermarketBG from "../assets/assetsBackground/Supermarket.png";

import PagiHujan from "../assets/assetsBackground/PagiHujan.png";
import PagiNormal from "../assets/assetsBackground/PagiNormal.png";
import PagiBerawan from "../assets/assetsBackground/PagiBerawan.png";

import SiangHujan from "../assets/assetsBackground/PagiHujan.png";
import SiangNormal from "../assets/assetsBackground/PagiNormal.png";
import SiangBerawan from "../assets/assetsBackground/PagiBerawan.png";

import SoreHujan from "../assets/assetsBackground/SoreHujan.png";
import SoreNormal from "../assets/assetsBackground/SoreNormal.png";
import SoreBerawan from "../assets/assetsBackground/SoreBerawan.png";

import MalamHujan from "../assets/assetsBackground/MalamHujan.png";
import MalamNormal from "../assets/assetsBackground/MalamNormal.png";
import MalamBerawan from "../assets/assetsBackground/MalamBerawan.png";

export default function ModeMain(props) {
  const [location, setLocation] = useState("Home");
  const [notif, setNotif] = useState("");
  const [blockNotif, setBlockNotif] = useState(false);
  const [openProgressCourse, setOpenProgressCourse] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [money, setMoney] = useState(12500000);
  const [inSupermarket, setInSupermarket] = useState(false);
  const [isOpenSupermarket, setIsOpenSupermarket] = useState(false);
  const [isOpenInventory, setIsOpenInventory] = useState(false);
  const [isOpenEvaluation, setIsOpenEvaluation] = useState(false);
  const [tingkatBelajar, setTingkatBelajar] = useState(100);
  const [tingkatBelajarKampus, setTingkatBelajarKampus] = useState(0);
  const [mingguKe, setMingguKe] = useState(0);
  const [lulus, setLulus] = useState(false);

  const [isOnMobile, setIsOnMobile] = useState(false);
  const [isOpenPhoneMobile, setIsOpenPhoneMobile] = useState(false);
  const [overlay, setOverlay] = useState(false);

  const [timeStatus, setTimeStatus] = useState("");
  const [statusStudent, setStatusStudent] = useState("normal");

  const [inCafe, setInCafe] = useState(false);
  const [indexItemCafe, setIndexItemCafe] = useState(0);

  const [jam, setJam] = useState(0);

  const [currentDay, setCurrentDay] = useState("");
  const [infoCourse, setInfoCourse] = useState(
    props.course.map((courseName) => [courseName, 0])
  );
  const [attendanceListCourse, setAttendanceListCourse] = useState(
    infoCourse.map((courseName) => [courseName[0], false])
  );

  const [finishedClass, setFinishedClass] = useState(false);

  const [pelajaranEffectFlag, setPelajaranEffectFlag] = useState(false);
  const [inventory, setInventory] = useState([]);

  const [progress, setProgress] = useState([
    ["Makan", 50, "Supermarket", false],
    ["Main", 50, "Campus", "Supermarket", false],
    ["Tidur", 50, "Campus", "Cafe", "Supermarket", false],
    ["Study", 0, "Supermarket", false]
  ]);

  const [supermarketItemList, setSupermarketItemList] = useState([]);
  const [cafeItemList, setCafeItemList] = useState([]);

  const [progressStudy, setProgressStudy] = useState(progress[3][1]);
  const [badPhysicIndicator, setBadPhysicIndicator] = useState(0);
  const [startTimerKegagalanFisik, setStartTimerKegagalanFisik] = useState(
    false
  );
  const [startTimerDeteksiKemalasan, setStartTimerDeteksiKemalasan] = useState(
    false
  );
  const [indikatorKemalasan, setIndikatorKemalasan] = useState(0);
  const [inClass, setInClass] = useState(false);

  const [sedangTidur, setSedangTidur] = useState(false);

  const [day, setDay] = useState("");
  const [hour, setHour] = useState(4);
  const [minute, setMinute] = useState(0);
  const [currentHari, setCurrentHari] = useState(3);

  const [backgroundLocation, setBackgroundLocation] = useState(HomeBG);
  const [jendela, setJendela] = useState(null);
  const [cuaca, setCuaca] = useState("Clear");

  const listHari = [
    "SENIN",
    "SELASA",
    "RABU",
    "KAMIS",
    "JUMAT",
    "SABTU",
    "MINGGU"
  ];

  const [weatherList, setWeatherList] = useState([]);

  const [counterWeather, setCounterWeather] = useState(0);

  const url =
    "https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=5a93cf4eed90323635a9209df23f4054";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        var tempWeatherList = weatherList;
        for (let element in data.list) {
          tempWeatherList.push(data.list[element].weather[0].main);
        }
        setWeatherList(tempWeatherList);
      });

    const interval = setInterval(function () {
      setCuaca(weatherList[Math.floor(Math.random() * weatherList.length)]);
    }, 10000);
  }, []);

  useEffect(() => {
    if (lulus) setOverlay(true);
    else setOverlay(false);
  }, [lulus]);

  useEffect(() => {
    console.log(cuaca, "WEATHER NOW");
  }, [cuaca]);

  useEffect(() => {
    if (jam >= 0 && jam <= 10) {
      setTimeStatus("pagi");
      if (cuaca === "Clear" && location === "Home") {
        if (jam >= 5 && jam <= 10) setBackgroundLocation(PagiNormal);
        else setBackgroundLocation(MalamNormal);
      } else if (cuaca === "Clouds" && location === "Home") {
        if (jam >= 5 && jam <= 10) setBackgroundLocation(PagiBerawan);
        else setBackgroundLocation(MalamBerawan);
      } else if (cuaca === "Rain" && location === "Home") {
        if (jam >= 5 && jam <= 10) setBackgroundLocation(PagiHujan);
        else setBackgroundLocation(MalamHujan);
      }
    } else if (jam >= 11 && jam <= 15) {
      setTimeStatus("siang");
      if (cuaca === "Clear" && location === "Home")
        setBackgroundLocation(SiangNormal);
      else if (cuaca === "Clouds" && location === "Home")
        setBackgroundLocation(SiangBerawan);
      else if (cuaca === "Rain" && location === "Home")
        setBackgroundLocation(SiangHujan);
    } else if (jam >= 16 && jam <= 18) {
      setTimeStatus("sore");
      if (cuaca === "Clear" && location === "Home")
        setBackgroundLocation(SoreNormal);
      else if (cuaca === "Clouds" && location === "Home")
        setBackgroundLocation(SoreBerawan);
      else if (cuaca === "Rain" && location === "Home")
        setBackgroundLocation(SoreHujan);
    } else if (jam >= 19 && jam <= 24) {
      setTimeStatus("malam");
      if (cuaca === "Clear" && location === "Home")
        setBackgroundLocation(MalamNormal);
      else if (cuaca === "Clouds" && location === "Home")
        setBackgroundLocation(MalamBerawan);
      else if (cuaca === "Rain" && location === "Home")
        setBackgroundLocation(MalamHujan);
    }
  }, [jam, cuaca]);

  const addMoney = (value) => {
    return money + value;
  };

  function updateMoney(val) {
    setMoney((money) => money + val);
  }

  const resetProgressMingguan = () => {
    setIsOpenEvaluation(false);
    setTingkatBelajar(0);
    setTingkatBelajarKampus(0);
    for (let attendance of attendanceListCourse) {
      attendance[1] = false;
    }
  };

  useEffect(() => {
    if (location === "Home") {
      setBackgroundLocation(HomeBG);
      if (jam >= 0 && jam <= 10) {
        setTimeStatus("pagi");
        if (cuaca === "Clear" && location === "Home") {
          if (jam >= 5 && jam <= 10) setBackgroundLocation(PagiNormal);
          else setBackgroundLocation(MalamNormal);
        } else if (cuaca === "Clouds" && location === "Home") {
          if (jam >= 5 && jam <= 10) setBackgroundLocation(PagiBerawan);
          else setBackgroundLocation(MalamBerawan);
        } else if (cuaca === "Rain" && location === "Home") {
          if (jam >= 5 && jam <= 10) setBackgroundLocation(PagiHujan);
          else setBackgroundLocation(MalamHujan);
        }
      } else if (jam >= 11 && jam <= 15) {
        setTimeStatus("siang");
        if (cuaca === "Clear" && location === "Home")
          setBackgroundLocation(SiangNormal);
        else if (cuaca === "Clouds" && location === "Home")
          setBackgroundLocation(SiangBerawan);
        else if (cuaca === "Rain" && location === "Home")
          setBackgroundLocation(SiangHujan);
      } else if (jam >= 16 && jam <= 18) {
        setTimeStatus("sore");
        if (cuaca === "Clear" && location === "Home")
          setBackgroundLocation(SoreNormal);
        else if (cuaca === "Clouds" && location === "Home")
          setBackgroundLocation(SoreBerawan);
        else if (cuaca === "Rain" && location === "Home")
          setBackgroundLocation(SoreHujan);
      } else if (jam >= 19 && jam <= 24) {
        setTimeStatus("malam");
        if (cuaca === "Clear" && location === "Home")
          setBackgroundLocation(MalamNormal);
        else if (cuaca === "Clouds" && location === "Home")
          setBackgroundLocation(MalamBerawan);
        else if (cuaca === "Rain" && location === "Home")
          setBackgroundLocation(MalamHujan);
      }
    } else if (location === "Campus") {
      setBackgroundLocation(CampusBG);
    } else if (location === "Supermarket") {
      setBackgroundLocation(SupermarketBG);
    } else if (location === "Cafe") {
      setBackgroundLocation(CafeBG);
    }
  }, [location]);

  useEffect(() => {
    if (day === "SATURDAY") {
      setMingguKe((mingguKe) => mingguKe + 1);
      setIsOpenEvaluation(true);
      if (mingguKe === 14) {
        if (tingkatBelajarKampus / (infoCourse.length * 14) >= 0.85) {
          setOverlay(true);
          setLulus(true);
        } else {
          props.updateSetIsFailed();
        }
      }
    }
  }, [day]);

  useEffect(() => {
    getCurrentDay(listHari[currentHari]);
  }, [currentHari]);

  useEffect(() => {
    getTime_hour(hour);
  }, [hour]);

  function changeMinute() {
    setDay((day) => {
      const newDay = listHari[currentHari];
      return newDay;
    });
    setMinute((minute) => {
      const newMinute = minute + 5;
      const checkHour = hour;

      if (checkHour === 8 && day !== "SUNDAY")
        updateNotifikasi("College Time!");
      if (checkHour === 17 && day !== "SUNDAY")
        updateNotifikasi("Your college time is over!");
      if (listHari[currentHari] === "SUNDAY")
        updateNotifikasi("Today is a day off! Do what you want to do...");

      if (newMinute >= 60) {
        setHour((hour) => {
          var intervalInt = 1;
          const newHour = hour + intervalInt;
          if (newHour >= 24) {
            setCurrentHari((currentHari) => {
              const newHari = currentHari + 1;
              if (newHari >= 7) {
                setDay((day) => {
                  const newDay = listHari[0];
                  return newDay;
                });
                return 0;
              }
              setDay((day) => {
                const newDay = listHari[newHari];
                return newDay;
              });
              return newHari;
            });
            return 0;
          }
          return newHour;
        });
        return 0;
      }
      return newMinute;
    });
  }

  useEffect(() => {
    const interval = setInterval(changeMinute, 1000);
    return () => clearInterval(interval);
  }, []);

  function buyItem(itemName) {
    var tempItemList = supermarketItemList;
    var itemDetection = "";
    var imageCode;
    for (let item of tempItemList) {
      if (item[0] === itemName && money >= item[1]) {
        itemDetection = item[0];
        item[2]--;
        imageCode = item[3];
        setMoney((money) => money - item[1]);
        break;
      }
    }
    const tempInventory = inventory;

    var itemExist = false;

    for (let items of inventory) {
      if (items[0] === itemDetection) {
        items[1]++;
        itemExist = true;
      }
    }
    if (!itemExist) tempInventory.push([itemDetection, 1, imageCode]);

    setInventory(inventory);
    setSupermarketItemList(tempItemList);
  }

  function switchLeft_Cafe(val) {
    if (indexItemCafe <= 0) setIndexItemCafe(cafeItemList.length - 1);
    else setIndexItemCafe((indexItemCafe - 1) % cafeItemList.length);
  }

  function switchRight_Cafe() {
    setIndexItemCafe((indexItemCafe + 1) % cafeItemList.length);
  }

  function ToNotSedangTidur() {
    setSedangTidur(false);
  }

  const buyDrinks = () => {
    setMoney((money) => money - cafeItemList[indexItemCafe][1]);
    const tempActions = [...progress];
    tempActions[1][1] += 30;
    tempActions[2][1] += 30;
    setProgress(tempActions);
  };

  useEffect(() => {
    //iventory
    const tempInventory = inventory;
    tempInventory.push(["Susu", 2]);
    tempInventory.push(["SnekBar", 2]);
    tempInventory.push(["Mineral Water", 2]);
    setInventory(tempInventory);
  }, []);

  useEffect(() => {
    let JSONItem = JSON.stringify(itemList);
    var arrayItem = JSON.parse(JSONItem);

    var counter = 0;
    var newArray = [];
    for (let element of arrayItem.supermarket) {
      var wadah = [];
      wadah[0] = element.username;
      wadah[1] = element.price;
      wadah[2] = element.stok;
      wadah[3] = element.id;
      newArray.push(wadah);
    }

    var CafeArray = [];
    for (let element of arrayItem.cafe) {
      var wadah = [];
      wadah[0] = element.username;
      wadah[1] = element.price;
      CafeArray.push(wadah);
    }

    setSupermarketItemList(newArray);
    setCafeItemList(CafeArray);
  }, []);

  useEffect(() => {
    setIsOpenSupermarket(false);
    if (!inSupermarket) {
      for (let buttons of document.getElementsByClassName(
        "tombol-supermarket"
      )) {
        buttons.style.display = "none";
      }
    } else {
      for (let buttons of document.getElementsByClassName(
        "tombol-supermarket"
      )) {
        buttons.style.display = "";
      }
    }
    console.log(inSupermarket);
  }, [inSupermarket]);

  useEffect(function appRunTimer() {
    const interval = setInterval(() => {
      var tempActions = [...progress];

      if (tempActions[0][1] <= 0 || tempActions[2][1] <= 0)
        setStartTimerKegagalanFisik(true);

      if (tempActions[0][1] >= 100) {
        tempActions[0][1] = 100;
      }
      if (tempActions[1][1] >= 100) {
        tempActions[1][1] = 100;
      }
      if (tempActions[2][1] >= 100) {
        tempActions[2][1] = 100;
      }

      if (tempActions[0][1] >= 2) tempActions[0][1] -= 2;
      if (tempActions[1][1] >= 2) tempActions[1][1] -= 2;
      if (tempActions[2][1] >= 2) tempActions[2][1] -= 2;

      if (tempActions[0][1] <= 15) {
        updateNotifikasi("You better eat first, let's be healthy!");
      }
      if (tempActions[1][1] <= 15) {
        updateNotifikasi("You're not having fun...");
      }
      if (tempActions[2][1] <= 15) {
        updateNotifikasi("You are tired you need rest...");
      }

      if (tempActions[3][1] <= 15) {
        updateNotifikasi("The spirit of learning, you can do it!");
      }

      if (tempActions[3][1] >= 100) {
        setProgressStudy(tempActions[3][1]);
        setTingkatBelajar((tingkatBelajar) => tingkatBelajar + 30);
        tempActions[3][1] = 0;
      }
      setProgressStudy(tempActions[3][1]);

      setProgress(tempActions);
    }, 1000);

    return function stopTimer() {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (
      (progress[0][1] <= 1 || progress[2][1] <= 1) &&
      !startTimerKegagalanFisik
    ) {
      setStartTimerKegagalanFisik(true);
      const interval = setInterval(() => {
        setBadPhysicIndicator((badPhysicIndicator) => {
          if (badPhysicIndicator === 80) {
            setBadPhysicIndicator(0);

            props.updateSetIsDead();
            return clearInterval(interval);
          }
          if (progress[0][1] > 3 && progress[2][1] > 3) {
            setBadPhysicIndicator(0);
            setStartTimerKegagalanFisik(false);
            clearInterval(interval);
          }
          return (badPhysicIndicator += 1);
        });
      }, 1000);
    }
  }, [progress[0][1], progress[2][1]]);

  useEffect(() => {
    if (progress[3][1] <= 1 && !startTimerDeteksiKemalasan) {
      setStartTimerDeteksiKemalasan(true);
      const interval = setInterval(() => {
        setIndikatorKemalasan((indikatorKemalasan) => {
          if (indikatorKemalasan === 80) {
            setIndikatorKemalasan(0);
            console.log("Kame telah di DO dari Kampus");
            props.updateSetIsFailed();
            return clearInterval(interval);
          }
          if (progress[3][1] > 3) {
            console.log("Kamu Bagus, Tingkatkan Kemampuan Belajarmu");
            setIndikatorKemalasan(0);
            setStartTimerDeteksiKemalasan(false);
            clearInterval(interval);
          }
          return (indikatorKemalasan += 1);
        });
      }, 1000);
    }
  }, [progress[3][1]]);

  function skipTime_Sleep(h) {
    setSedangTidur(true);
  }

  function doAction(action) {
    var incrementVal = 10;
    if (action === "Study") {
      setStatusStudent("belajar");
      setTimeout(() => setStatusStudent("normal"), 2000);

      if (location !== "Campus")
        setTingkatBelajar((tingkatBelajar) => tingkatBelajar + 1);
      console.log(tingkatBelajar, "tingkatBelaajr");

      if (progress[0][1] < 30 || progress[2][1] < 30) incrementVal = 8;
      if (progress[1][1] <= 35) incrementVal = 4;
      if (progress[0][1] < 15 || progress[2][1] < 15) incrementVal = 1;
      if (progress[2][1] <= 1) incrementVal = 0;
      progress[0][1] -= 1;
      progress[1][1] -= 1;
      progress[2][1] -= 1;
    }

    if (action === "Main") {
      setStatusStudent("main");
      setTimeout(() => setStatusStudent("normal"), 2000);
      incrementVal = 70;
      if (progress[0][1] < 30) incrementVal = 6;
      if (progress[2][1] < 30) incrementVal = 3;
      if (progress[2][1] <= 1) incrementVal = 0;
      progress[0][1] -= 10;
      progress[2][1] -= 10;
    }

    if (action === "Tidur") {
      setStatusStudent("tidur");
      setTimeout(() => setStatusStudent("normal"), 2000);
      const tempHour = hour + 4;
      setHour((hour) => (hour + 4) % 24);
      console.log((hour % 24) + 4);
      if (tempHour > 24) {
        const modulo = tempHour % 24;
        setCurrentHari((currentHari) => (currentHari + 1) % 7);
        setDay(listHari[currentHari]);
      }
      incrementVal = 90;
      if (progress[0][1] < 25) incrementVal = 30;
      progress[0][1] -= 50;
      progress[1][1] -= 20;
    }

    if (action === "Makan") {
      incrementVal = 80;

      if (inventory.length === 0) {
        updateNotifikasi("Stok makananmu habis, segeralah beli");
        return;
      } else {
        setStatusStudent("makan");
        setTimeout(() => setStatusStudent("normal"), 2000);
        const fetchMakanan = Math.floor(Math.random() * inventory.length);
        const tempInventory = inventory;
        for (let items in tempInventory) {
          const convertToInt = parseInt(items, 10);
          console.log(convertToInt, fetchMakanan);
          if (convertToInt === fetchMakanan) {
            if (tempInventory[convertToInt][1] === 1) {
              tempInventory.splice(convertToInt, 1);
            } else {
              tempInventory[convertToInt][1]--;
            }
          }
        }
        setInventory(tempInventory);
        progress[1][1] -= 10;
        progress[2][1] -= 10;
      }
    }

    var tempActions = [...progress];
    for (let i of tempActions) {
      if (i[0] === action) i[1] += incrementVal;
    }
    setProgress(tempActions);
  }

  useEffect(() => {
    const tempProgress_refresh = progress;
    for (let element of tempProgress_refresh) {
      element[element.length - 1] = false;
    }
    setProgress(tempProgress_refresh);
    const tempProgress = progress;
    for (let element of tempProgress) {
      for (let details in element) {
        if (details <= 1) continue;
        if (element[details] === location) {
          element[element.length - 1] = true;
        }
      }
    }
    setProgress(tempProgress);
  }, [location, jam]);

  function cekKelulusan() {
    for (let courseName of props.course) {
      if (courseName[1] < 14) return false;
    }
    return true;
  }
  cekKelulusan();

  useEffect(() => {
    const tempCourse = infoCourse;
    var tempJam = jam;

    if (!pelajaranEffectFlag && !finishedClass) {
      for (let mk of tempCourse) {
        if (
          jam >= mk[0][2] &&
          jam <= mk[0][3] - 1 &&
          currentDay === mk[0][1] &&
          inClass
        ) {
          if (progress[3][1] >= 100) {
            const tempAttendance = attendanceListCourse;
            let counter = 0;
            for (let namaMk of tempAttendance) {
              if (namaMk[0][0] === mk[0][0]) {
                namaMk[0][1] = true;
                break;
              }
              counter++;
            }

            setAttendanceListCourse(tempAttendance);
            mk[1] += 1;
            setTingkatBelajarKampus(
              (tingkatBelajarKampus) => tingkatBelajarKampus + 1
            );
            setPelajaranEffectFlag(true);
            setFinishedClass(true);
            setInClass(false);
            setInfoCourse(tempCourse);
          }
        }
      }
    }
  }, [progress]);

  useEffect(() => {
    for (let mk of infoCourse) {
      if (jam === mk[0][2] - 1 && currentDay === mk[0][1]) {
        const tempActions = [...progress];
        if (tempActions[0][3] !== "Campus")
          tempActions[0].splice(3, 0, "Campus");
        setProgress(tempActions);
      }
      if (
        jam === mk[0][2] &&
        currentDay === mk[0][1] &&
        location === "Campus"
      ) {
        const tempActions = [...progress];
        tempActions[3][1] = 0;
        if (tempActions[0][3] !== "Campus")
          tempActions[0].splice(3, 0, "Campus");
        setProgress(tempActions);
        setInClass(true);
        setNotif("Class " + mk[0][0] + " has started.");
      }
      if (
        jam < mk[0][3] &&
        jam > mk[0][2] &&
        currentDay === mk[0][1] &&
        location === "Campus"
      ) {
        const tempActions = [...progress];
        if (tempActions[0][3] !== "Campus")
          tempActions[0].splice(3, 0, "Campus");
        setProgress(tempActions);
      }
      if (jam === mk[0][3] && currentDay === mk[0][1]) {
        setPelajaranEffectFlag(false);
        setFinishedClass(false);
        const tempActions = [...progress];
        if (tempActions[0][3] === "Campus") tempActions[0].splice(3, 1); //
        setProgress(tempActions);
        console.log(progress);
        setNotif("Course " + mk[0][0] + " is over.");
      }

      if (jam === mk[0][3] - 1 && currentDay === mk[0][1]) {
        const tempActions = [...progress];
        if (tempActions[0][3] === "Campus") tempActions[0].splice(3, 1); //
        setProgress(tempActions);
      }
    }
  }, [jam]);

  function updateStartTimerKegagalanFisik_start() {
    setStartTimerKegagalanFisik(true);
  }
  function updateStartTimerKegagalanFisik_stop() {
    setStartTimerKegagalanFisik(false);
  }

  const updateCloseMobile = () => {
    setIsOpenPhoneMobile(false);
    setOverlay(false);
  };
  const updateOpenMobile = () => {
    setIsOpenPhoneMobile(true);
    setOverlay(true);
  };

  function getValueStudy(val) {
    setProgressStudy(val);
  }

  function getCurrentDay(d) {
    setCurrentDay(d);
  }

  function getInfoCourse(arr) {
    setInfoCourse(arr);
  }

  function updateOnMobile_IN() {
    setIsOnMobile(true);
  }

  function updateOnMobile_OUT() {
    setIsOnMobile(false);
  }

  function closeOverlay() {
    setOverlay(false);
  }

  function openOverlay() {
    setOverlay(true);
  }

  useEffect(() => {
    if (window.innerWidth <= 780) setIsOnMobile(false);
    else setIsOnMobile(true);
  }, [window.innerWidth]);

  function getTime_hour(h) {
    setJam(h);
  }

  useEffect(() => {
    setNotif("Hello!");
  }, []);

  function updateNotifikasi(pesan) {
    if (!blockNotif) {
      setBlockNotif(true);
      setTimeout(() => {
        setNotif(pesan);
        setBlockNotif(false);
      }, 4000);
    }
  }

  function updateOpenCourseAccess() {
    if (!openProgressCourse) setOverlay(true);
    else setOverlay(false);
    setOpenProgressCourse(!openProgressCourse);
  }

  function updateProfileAccess() {
    if (!openProfile) setOverlay(true);
    else setOverlay(false);
    setOpenProfile(!openProfile);
  }

  function updateOpenCafe() {
    setInCafe(!inCafe);
  }

  function updateOpenInventory_IN() {
    setOverlay(true);
    setIsOpenInventory(true);
  }

  function updateOpenInventory_OUT() {
    setOverlay(false);
    setIsOpenInventory(false);
  }

  function updateOpenCafe_IN() {
    setInCafe(true);
  }

  function updateOpenCafe_OUT() {
    setInCafe(false);
  }

  function updateOpenSupermarketMenu() {
    if (inSupermarket) {
      if (!isOpenSupermarket) setOverlay(true);
      else setOverlay(false);
      setIsOpenSupermarket(!isOpenSupermarket);
    }
  }

  function updateGoToSupermarket_OUT() {
    setInSupermarket(false);
  }

  function updateGoToSupermarket_IN() {
    setInSupermarket(true);
  }

  function changeLocation(e) {
    setLocation(e);
  }

  function updateMoney(value) {
    setMoney(value);
  }

  return (
    <div id="game-frame" className="">
      <div className="row justify-content-center p-3 bgTest">
        <img
          className="bg-lt"
          src={backgroundLocation}
          id="background-latar"
          alt=""
        />
        <img className="w-25" id="jendela-rumah" src={jendela} alt="" />
        <div className="header text-center">
          <Time
            listHari={listHari}
            currentHari={currentHari}
            hour={hour}
            minute={minute}
          />
        </div>
        {overlay ? <Overlay /> : null}
        {isOpenPhoneMobile ? (
          <ResponsiveNews jam={jam} minute={minute} close={updateCloseMobile} />
        ) : null}
        {lulus ? (
          <Lulus
            username={props.username}
            prodi={props.prodi}
            gender={props.gender}
            backToMainMenu={props.backToMainMenu}
          />
        ) : null}
        {isOpenEvaluation ? (
          <Evaluation
            attendanceListCourse={attendanceListCourse}
            infoCourse={infoCourse}
            tingkatBelajar={tingkatBelajar}
            tingkatBelajarKampus={tingkatBelajarKampus}
            mingguKe={mingguKe}
            username={props.username}
            prodi={props.prodi}
            resetProgressMingguan={resetProgressMingguan}
            addMoney={addMoney}
            updateMoney={updateMoney}
            money={money}
          />
        ) : null}
        {isOpenInventory ? (
          <Inventory
            updateOpenInventory_OUT={updateOpenInventory_OUT}
            userInventory={inventory}
          />
        ) : null}
        {openProgressCourse ? (
          <ProgressCourse
            prodi={props.prodi}
            course={infoCourse}
            username={props.username}
            getInfo_course={getInfoCourse}
            updatePM={updateOpenCourseAccess}
          />
        ) : null}
        {openProfile ? (
          <Profile
            updateProfile={updateProfileAccess}
            username={props.username}
            prodi={props.prodi}
            gender={props.gender}
          />
        ) : null}
        {isOpenSupermarket ? (
          <Supermarket
            updateOpenSupermarketMenu={updateOpenSupermarketMenu}
            supermarketItemList={supermarketItemList}
            buyItem={buyItem}
          />
        ) : null}
        <div id="left-column" className="col mx-auto">
          <GoTo
            studentLocation={location}
            onclick={changeLocation}
            inSupermarket={inSupermarket}
            updateGoToSupermarket_OUT={updateGoToSupermarket_OUT}
            updateGoToSupermarket_IN={updateGoToSupermarket_IN}
            updateOpenCafe_IN={updateOpenCafe_IN}
            updateOpenCafe_OUT={updateOpenCafe_OUT}
            isOnMobile={isOnMobile}
          />
          {isOnMobile ? <News jam={jam} minute={minute} /> : null}
          {!isOnMobile ? (
            <div className="text-center my-4 news">
              <button
                onClick={updateOpenMobile}
                style={{
                  width: "40%",
                  backgroundColor: "#32568f",
                  color: "white",
                  borderRadius: "10px"
                }}
              >
                NEWS
              </button>
            </div>
          ) : null}
          <div className="text-center">
            <button
              onClick={updateOpenInventory_IN}
              id="open-inventory-button"
              className="btn-secondary left-btnzoom text-center w-50 button-Inventory mb-4"
            >
              <img className="w-25" src={BackpackIcon} alt="" />
            </button>
          </div>
        </div>
        <div id="center-column" className="col-6 text-center mx-3 containerBox">
          <Student
            username={props.username}
            status={notif}
            inCafe={inCafe}
            updateOpenCafe={updateOpenCafe}
            updateOpenCafe_IN={updateOpenCafe_IN}
            updateOpenCafe_OUT={updateOpenCafe_OUT}
            switchLeft_Cafe={switchLeft_Cafe}
            switchRight_Cafe={switchRight_Cafe}
            cafeItemList={cafeItemList}
            indexItemCafe={indexItemCafe}
            buyDrinks={buyDrinks}
            hour={hour}
            statusStudent={statusStudent}
            gender={props.gender}
            endela={jendela}
          />
        </div>
        <div id="right-column" className="col">
          <Money money={money} />
          <StatusBar
            updateNotif={updateNotifikasi}
            getStudyValue={getValueStudy}
            progress={progress}
            doAction={doAction}
          />
          <Addtion
            updatePM={updateOpenCourseAccess}
            updateProfile={updateProfileAccess}
            updateOpenSupermarketMenu={updateOpenSupermarketMenu}
          />
        </div>
      </div>
    </div>
  );
}
