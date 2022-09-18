// import { digitsFaToEn } from "@persian-tools/persian-tools";
// import { PhoneNumberUtil } from "google-libphonenumber";
// const phoneUtil = PhoneNumberUtil.getInstance();

export const toEnglishNo = (i) => {
  if (!i) return i;
  return digitsFaToEn(i || "");
};

export const NO_LOCAL_STORAGE = typeof window === "undefined" || !localStorage,
  LOCAL_STORAGE = !NO_LOCAL_STORAGE;

export const splitDigitsBy3 = (input) => {
  input = input && input.replace(/\s/g, "");
  return input && input.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export const toCartForm = (input) => {
  input = input && `${input}`.replace(/\s/g, "");
  return (
    input &&
    input
      .replace(/[^\dA-Z]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim()
  );
};

export const walletName = (i) => {
  if (!i) return;
  const input = i.toString();

  const omni = /^(1|3|bc|Bc|BC|bC)/,
    erc20 = /^(0x|0X)/,
    trc20 = /^(t|T)/;

  if (omni.test(input)) return "omni";
  else if (erc20.test(input)) return "erc20";
  else if (trc20.test(input)) return "trc20";
};

export const removeSpaces = (input) => {
  if (!input) return "";
  return input && `${input}`.replace(/\s/g, "");
};

export const emailValidation = (input) => {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(input?.trim());
};

export const phoneValidation = (i) => {
  if (!i) return;

  const input = toEnglishNo(i);
  let regex = /^09[0|1|2|3|9][0-9]{8}$/;
  // /^(09)(01|02|03|10|19|18|17|16|15|14|13|11|12|35|36|37|38|39|32|33|34|30|31|21|22|91|92|90)\d{7}$/;
  return regex.test(input);
};

export const AsteriskEmail = (input) => {
  if (!input) return input;
  const index = input?.indexOf("@"),
    addr = input?.slice(0, 3),
    provider = input?.slice(index, input.length);

  return addr + "***" + provider;
};

export function checkMelliCode(i) {
  if (!i) return;
  let code = toEnglishNo(i);

  var L = code.length;

  if (L < 8 || parseInt(code, 10) == 0) return false;
  code = ("0000" + code).substr(L + 4 - 10);
  if (parseInt(code.substr(3, 6), 10) == 0) return false;
  var c = parseInt(code.substr(9, 1), 10);
  var s = 0;
  for (var i = 0; i < 9; i++) s += parseInt(code.substr(i, 1), 10) * (10 - i);
  s = s % 11;
  return (s < 2 && c == s) || (s >= 2 && c == 11 - s);
}

export const tempFu = () => { };

export const testSheba = (i) => {
  let regex = /^(?:IR)(?=.{24}$)[0-9]*$/;
  return regex.test(i?.trim());
};

export const toMobileNoForm = (phone) => {
  // 09160409061 => 0916 040 9061
  if (!phone || (phone && phone.length < 10)) return phone;
  const toNewForm =
    phone.substring(0, 4) +
    " " +
    phone.substring(4, 7) +
    " " +
    phone.substring(7, 11);

  return toNewForm;
};

export const isNonEnglish = (i) => {
  if (!i) return i;
  let disallowed = /[^\x00-\x7F]+/;
  return disallowed.test(i);
};

export const deleteNonNumerical = (i) => {
  if (!i) return i;
  var numberPattern = /\d+/g;
  return i.match(numberPattern);
};

export const isLetter = (char) => {
  return RegExp(/^\p{L}/, "u").test(char);
};

export const isNum = (input) => {
  if (!input) return;
  let disallowed = /^\d+$/;
  return disallowed.test(input);
};

export const passValidation = (input) => {
  var regx =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\w~@#$%^&*+=`|{}:;!.?\"()\[\]-]{8,2500}$/;
  return regx.test(input);
};

export const convertMonthNumToName = (num) => {
  const monthNumToName = {
    1: "فروردین",
    2: "اردیبهشت",
    3: "خرداد",
    4: "تیر",
    5: "مرداد",
    6: "شهریور",
    7: "مهر",
    8: "آبان",
    9: "آذر",
    10: "دی",
    11: "بهمن",
    12: "اسفند",
  };

  return monthNumToName[num];
};

export const convertDayNumToName = (num) => {
  switch (num) {
    case "1":
      return "دوشنبه";
    case "2":
      return "سه‌شنبه";
    case "3":
      return "چهارشنبه";
    case "4":
      return "پنجشنبه";
    case "5":
      return "جمعه";
    case "6":
      return "شنبه";
    default:
      return "یکشنبه";
  }
};

export const convertEngDayToPer = (day) => {
  const days = {
    saturday: "شنبه",
    sunday: "یک‌شنبه",
    monday: "دوشنبه",
    tuesday: "سه‌شنبه",
    wednesday: "چهارشنبه",
    thursday: "پنج‌شنبه",
    friday: "جمعه",
  };

  return days[day.toLowerCase()];
};

export const deleteCommas = (input) => {
  if (!input) return input;
  return input?.toString().replace(/,/g, "");
};

export const numberWithCommas = (x) => {
  // toEnglishNo(x);
  // const numbers = x;
  if (isNaN(x)) return "";
  if (x < 1 || !x) return x;
  return parseInt(x)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const deleteGarbagefloats = (i, ac) => {
  if (!i || !ac) return i;

  return i.toString().slice(0, ac + 1);
};

export const toFixFloat = (val, acFl) => {
  if (!val) return val;
  const x = val?.toString();
  const floatPoint = x.indexOf(".");
  const naturalNo = x.slice(0, floatPoint),
    floatNo = x.slice(floatPoint, x.length),
    res = naturalNo + deleteGarbagefloats(floatNo, acFl);

  return parseFloat(res);
};

export const isASpecificDomain = (
  domain = "https://smartmoney.tetherland.com"
) => {
  if (typeof window !== undefined) {
    var url = location.href;
    if (url.includes(domain)) {
      setisSmartMoney(true);
    }
  }
};

export function floatNumberWithCommas(val, acFl = 2) {
  if (isNaN(val)) return "";
  if (!val) return val;

  const x = val?.toString();
  const floatPoint = x.indexOf(".");
  if (floatPoint < 0) return numberWithCommas(x);

  const naturalNo = numberWithCommas(x.slice(0, floatPoint)),
    floatNo = x.slice(floatPoint, x.length),
    res = naturalNo + deleteGarbagefloats(floatNo, acFl);

  return res;
}
export function floatNumberWithCommasCurrencyLive(val, acFl) {
  if (isNaN(val)) return "";
  if (!val) return val;

  const x = val?.toString();
  const floatPoint = x.indexOf(".");
  if (floatPoint < 0) return numberWithCommas(x);

  const naturalNo = numberWithCommas(x.slice(0, floatPoint)),
    floatNo = x.slice(floatPoint, x.length),
    res = naturalNo + deleteGarbagefloats(floatNo, acFl);

  return res;
}
export function numberWithCommas2(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export const toCardForm = (i) => {
  if (!i) return;

  let joy = i.match(/.{1,4}/g);
  return joy.join(" ");
};

export const toCardFormReverse = (str) =>
  toCardForm(str)?.split(" ")?.reverse().join(" ");

export const toPhoneForm = (input) => {
  if (!input) return;
  const i = removeSpaces(input).replace("-", "");
  const a = i.match(/.{1,4}/g);
  return a.join(" ");

  // const a = i.match(/.{1,3}/g);

  const first = a?.shift(),
    second = a
      ?.join("")
      ?.match(/.{1,4}/g)
      ?.join(" ");
  return !second ? i : first + " - " + second;
};

export function checkCartDigit(i) {
  if (!i) return;

  const code = toEnglishNo(i);
  var L = code.length;
  if (
    L < 16 ||
    parseInt(code.substr(1, 10), 10) == 0 ||
    parseInt(code.substr(10, 6), 10) == 0
  )
    return false;
  var c = parseInt(code.substr(15, 1), 10);
  var s = 0;
  var k, d;
  for (var i = 0; i < 16; i++) {
    k = i % 2 == 0 ? 2 : 1;
    d = parseInt(code.substr(i, 1), 10) * k;
    s += d > 9 ? d - 9 : d;
  }
  return s % 10 == 0;
}
export function bytesToSize(bytes) {
  var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes == 0) return "0 Byte";
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return { size: Math.round(bytes / Math.pow(1024, i), 2), sizeType: sizes[i] };
}

export function percentage(num, per) {
  return (num / 100) * per;
}

export function percentageRemained(num, per) {
  return num - percentage(num, per);
}

const banks = [
  { label: "ملت", id: 610433 },
  { label: "آینده", id: 636214 },
  { label: "سامان", id: 621986 },
  { label: "پاسارگاد", id: 502229 },
  { label: "ملی ایران", id: 603799 },
  { label: "صادرات ", id: 603769 },
  { label: "تجارت", id: 627353 },
  { label: "سپه", id: 589210 },
  { label: "کشاورزی", id: 603770 },
  { label: "توسعه تعاون", id: 502908 },
  { label: "اقتصاد نوین", id: 627412 },
  { label: "شهر", id: 502806 },
  { label: "مسکن", id: 628023 },
  { label: "قرض الحسنه رسالت", id: 504172 },
  { label: "انصار", id: 627381 },
  { label: "قوامین", id: 639599 },
  { label: "کارآفرین", id: 627488 },
  { label: "گردشگری", id: 505416 },
  { label: "موسسه اعتباری کوثر", id: 505801 },
  { label: "سینا", id: 639346 },
  { label: "پارسیان", id: 622106 },
  { label: "پست بانک ایران", id: 627760 },
  { label: "توسعه صادرات ایران", id: 627648 },
  { label: "حکمت ایرانیان", id: 636949 },
  { label: "دی", id: 502938 },
  { label: "رفاه کارگران", id: 589463 },
  { label: "سرمایه", id: 639607 },
  { label: "صنعت و معدن", id: 627961 },
  { label: "قرض الحسنه مهر ایران", id: 606373 },
  { label: "مرکزی", id: 636795 },
  { label: "موسسه اعتباری عسکریه(ملل)", id: 606256 },
  { label: "ایران زمین", id: 505785 },
];

export const banksAndCodes = banks.map((item, index) => ({
  value: index,
  ...item,
}));

export const citiesAndCodes = [
  { value: null, label: "انتخاب" },
  { value: "011", label: "(011)" + " مازندران" },
  { value: "013", label: "(013)" + " گیلان" },
  { value: "017", label: "(017)" + " گلستان" },
  { value: "021", label: "(021)" + " تهران" },
  { value: "023", label: "(023)" + " سمنان" },
  { value: "024", label: "(024)" + " زنجان" },
  { value: "025", label: "(025)" + " قم" },
  { value: "026", label: "(026)" + " البرز" },
  { value: "028", label: "(028)" + " قزوین" },
  { value: "031", label: "(031)" + " اصفهان" },
  { value: "034", label: "(034)" + " کرمان" },
  { value: "035", label: "(035)" + " یزد" },
  { value: "038", label: "(038)" + " چهار محال و بختیاری" },
  { value: "041", label: "(041)" + " آذربایجان شرقی" },
  { value: "044", label: "(044)" + " آذربایجان غربی" },
  { value: "045", label: "(045)" + " اردبیل" },
  { value: "051", label: "(051)" + " خراسان رضوی" },
  { value: "054", label: "(054)" + " سیستان و بلوچستان" },
  { value: "056", label: "(056)" + " خراسان جنوبی" },
  { value: "058", label: "(058)" + " خراسان شمالی" },
  { value: "061", label: "(061)" + " خوزستان" },
  { value: "066", label: "(066)" + " لرستان" },
  { value: "071", label: "(071)" + " فارس" },
  { value: "074", label: "(074)" + " کهگیلویه و بویراحمد" },
  { value: "076", label: "(076)" + " هرمزگان" },
  { value: "077", label: "(077)" + " بوشهر" },
  { value: "081", label: "(081)" + " همدان" },
  { value: "083", label: "(083)" + " کرمانشاه" },
  { value: "084", label: "(084)" + " ایلام" },
  { value: "086", label: "(086)" + " مرکزی" },
  { value: "087", label: "(087)" + " کردستان" },
];

export const createUrl = (name) => `/images/banks-svg/${name}.svg`;

export const bankCodeToImage = (id) => {
  switch (id) {
    case 603799:
      return createUrl("Bank - Melli - Color"); //melli
    case 589210:
      return createUrl("Bank - Sepah - Color"); //sepah
    case 627961:
      return createUrl("Bank - Sanat Madan - Color"); //sanat va madan
    case 603770:
      return createUrl("Bank - Keshavarzi - Color"); //keshavarzi
    case 639217:
      return createUrl("Bank - Keshavarzi - Color"); //keshavarzi
    case 628023:
      return createUrl("Bank - Maskan - Color"); //maskan
    case 627760:
      return createUrl("Bank - Postbank - Color"); //post bank iran
    case 502908:
      return createUrl("Bank - Tosee Taavon - Color"); //tose-e ta-avon
    case 627412:
      return createUrl("Bank - Eghtesad Novin - Color"); //eghtesad novin
    case 622106:
      return createUrl("Bank - Parsian - Color"); //parsian
    case 639194:
      return createUrl("Bank - Parsian - Color"); //parsian
    case 627884:
      return createUrl("Bank - Parsian - Color"); //parsian
    case 502229:
      return createUrl("Bank - Pasargad - Color"); //pasargad
    case 639347:
      return createUrl("Bank - Pasargad - Color"); //pasargad
    case 627488:
      return createUrl("Bank - Karafarin - Color"); //karafarin
    case 502910:
      return createUrl("Bank - Karafarin - Color"); //karafarin
    case 621986:
      return createUrl("Bank - Saman - Color"); //saman
    case 639346:
      return createUrl("Bank - Sina - Color"); //sina
    case 639607:
      return createUrl("Bank - Sarmayeh - Color"); //sarmaye
    case 502806:
      return createUrl("Bank - Shahr - Color"); //shahr
    case 502938:
      return createUrl("Bank - Dey - Color"); //dey
    case 603769:
      return createUrl("Bank - Saderat - Color"); //saderat
    case 610433:
      return createUrl("Bank - Mellat - Color"); //mellat
    case 991975:
      return createUrl("Bank - Mellat - Color"); //mellat
    case 627353:
      return createUrl("Bank - Tejarat - Color"); //tejarat
    case 589463:
      return createUrl("Bank - Refah - Color"); //refah
    case 627381:
      return createUrl("Bank - Ansar - Color"); //ansar
    case 636795:
      return createUrl("Bank - Bank Markazi - Color");
    case 636214:
      return createUrl("Bank - Ayandeh - Color"); //
    case 505416:
      return createUrl("Bank - Gardeshgari - Color"); //
    case 636949:
      return createUrl("Bank - Hekmat - Color"); //
    case 505785:
      return createUrl("Bank - Iran Zamin - Color.png"); //
    case 505801:
      return createUrl("Bank - Kosar - Color"); //
    case 639370:
      return createUrl("Bank - Mehr Eghtesad - Color"); //
    case 606373:
      return createUrl("Bank - Mehr Iran - Color"); //
    case 627648:
      return createUrl("Bank - Tosee Saderat - Color"); //
    case 207177:
      return createUrl("Bank - Tosee Saderat - Color"); //
    case 606256:
      return createUrl("Bank - Melall - Color"); //
    case 504172:
      return createUrl("Bank - Resalat - Color"); //
    case 639599:
      return createUrl("Bank - Ghavamin - Color"); //
    default:
      return createUrl("shetab");
  }
};

export const shebaSplit = (shebaNo) => {
  if (!shebaNo) {
    return;
  }
  let pureSheba = shebaNo;
  if (shebaNo.startsWith("IR")) {
    pureSheba = shebaNo.replace("IR", "");
  }
  if (pureSheba.length != 24) return shebaNo;
  let first2Char = pureSheba.substring(0, 2);
  let last2Char = pureSheba.slice(-2);
  let middleCahr = pureSheba.substring(2, shebaNo.length - 2);
  let middleCharWithSpace = [...middleCahr]
    .map((d, i) => (i % 4 == 0 ? " " + d : d))
    .join("")
    .trim();

  return first2Char + " " + middleCharWithSpace + " " + last2Char;
};

export const shebaToBankImage = (shebaNo) => {
  var id = undefined;
  if (!shebaNo) {
    return;
  }
  if (shebaNo.toUpperCase()) {
    if (shebaNo.startsWith("IR")) {
      id = shebaNo.substring(4, 7);
    } else {
      id = shebaNo.substring(2, 5);
    }
  }
  // const id = shebaNo.substring(4, 7);
  if (id?.length !== 3) {
    return null;
  }

  switch (id) {
    case "017":
      return createUrl("Bank - Melli - Color"); //melli
    case "015":
      return createUrl("Bank - Sepah - Color"); //sepah
    case "011":
      return createUrl("Bank - Sanat Madan - Color"); //sanat va madan
    case "016":
      return createUrl("Bank - Keshavarzi - Color"); //keshavarzi
    case "014":
      return createUrl("Bank - Maskan - Color"); //maskan
    case "021":
      return createUrl("Bank - Postbank - Color"); //post bank iran
    case "022":
      return createUrl("Bank - Tosee Taavon - Color"); //tose-e ta-avon
    case "055":
      return createUrl("Bank - Eghtesad Novin - Color"); //eghtesad novin
    case "054":
      return createUrl("Bank - Parsian - Color"); //parsian
    case "057":
      return createUrl("Bank - Pasargad - Color"); //pasargad
    case "053":
      return createUrl("Bank - Karafarin - Color"); //karafarin
    case "056":
      return createUrl("Bank - Saman - Color"); //saman
    case "059":
      return createUrl("Bank - Sina - Color"); //sina
    case "058":
      return createUrl("Bank - Sarmayeh - Color"); //sarmaye
    case "061":
      return createUrl("Bank - Shahr - Color"); //shahr
    case "066":
      return createUrl("Bank - Dey - Color"); //dey
    case "019":
      return createUrl("Bank - Saderat - Color"); //saderat
    case "012":
      return createUrl("Bank - Mellat - Color"); //mellat
    case "018":
      return createUrl("Bank - Tejarat - Color"); //tejarat
    case "013":
      return createUrl("Bank - Refah - Color"); //refah
    case "063":
      return createUrl("Bank - Ansar - Color"); //ansar
    case "010":
      return createUrl("Bank - Bank Markazi - Color");
    case "062":
      return createUrl("Bank - Ayandeh - Color"); //
    case "064":
      return createUrl("Bank - Gardeshgari - Color"); //
    case "065":
      return createUrl("Bank - Hekmat - Color"); //
    case "069":
      return createUrl("Bank - Iran Zamin - Color.png"); //
    case "073":
      return createUrl("Bank - Kosar - Color"); //
    case "090":
      return createUrl("Bank - Mehr Eghtesad - Color"); //
    case "060":
      return createUrl("Bank - Mehr Iran - Color"); //
    case "020":
      return createUrl("Bank - Tosee Saderat - Color"); //
    case "075":
      return createUrl("Bank - Melall - Color"); //
    case "070":
      return createUrl("Bank - Resalat - Color"); //
    case "052":
      return createUrl("Bank - Ghavamin - Color"); //
    default:
      return createUrl("shetab");
  }
};

export const cardToBankImage = (cardNo) => {
  if (!cardNo) return;

  const id = cardNo.substring(0, 6);

  if (id?.length != 6) return null;

  return bankCodeToImage(parseInt(id));
};

export const cardToBankName = (cardNo) => {
  if (!cardNo) return;

  const id = cardNo.substring(0, 6);

  if (id?.length != 6) return null;

  return banksAndCodes.find((bc) => bc.id === +id)?.label;
};

export const onEnterPress = (e, event = () => { }) => {
  if (e.key === "Enter") event();
};

export const bankCodeToName = (code = 0) => banksAndCodes[code].label;

export const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const txIdShortener = (txId) =>
  !txId
    ? ""
    : `${txId?.substring(0, 5)} ... ${txId?.substring(
      txId?.length - 5,
      txId?.length
    )}`;

export const calculateBankFee = (amount) =>
  Math.round(parseFloat(`${(+amount - 1) / 100_000_000 + 0.5}`)) * 5_000;

export const add = (...numbers) =>
  numbers.reduce((acc, curr) => (isNaN(curr) ? acc : acc + curr), 0);

export const subtract = (...numbers) =>
  numbers.reduce(
    (acc, curr, idx) => (idx === 0 ? curr : isNaN(curr) ? acc : acc - curr),
    0
  );

export const multiply = (...numbers) =>
  numbers.reduce((acc, curr) => (isNaN(curr) ? acc : acc * curr), 1);

export const divide = (num1, num2) => {
  if (isNaN(num1 / num2)) return;
  return num1 / num2;
};

export const roundFloats = (num, fractionDigits = 2) =>
  num ? parseFloat(num.toFixed(fractionDigits)) : num;

export const roundPrice = (price) => {
  const priceStr = price.toString();

  const sliceNum = priceStr.length - 3;

  return parseInt(
    priceStr.slice(0, sliceNum) +
    Array(priceStr.length - sliceNum)
      .fill("0")
      .join("")
  );
};

export const getBetweenPrices = (num1, num2, differ = 2000) => {
  const nums = [];

  for (let i = num1 - differ; i <= num2 + differ; i += differ) {
    nums.push(i);
  }

  return { nums, min: num1 - differ, max: num2 + differ };
};

export const dateToString = (date, showYear) => {
  if (!date) return "";

  const [year, month, day] = date.split("/");
  return `${+day} ${convertMonthNumToName(+month)} ${showYear ? year : ""}`;
};

export const addFloats = (num, floatsCount = 2) => {
  if (!num) return undefined;

  const [integer, floats] = num.toString().split(".");

  if (!floats) {
    return `${integer}.${"0".repeat(floatsCount)}`;
  }

  if (floats.length < floatsCount) {
    return `${integer}.${floats + "0".repeat(floatsCount - floats.length)}`;
  }

  return num.toString();
};

// export const getCardNumber = (input) => {
//   input = removeSpaces(input);
//   input = digitsFaToEn(input);
//   input = input.replace(/[^0-9]/g, "");
//   if (input == "") return "";
//   return input;
// };
