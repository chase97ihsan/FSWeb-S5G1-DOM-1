const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */
const navItems= document.querySelectorAll("header nav a");

navItems[0].textContent= siteContent["nav"]["nav-item-1"]
navItems[1].textContent= siteContent["nav"]["nav-item-2"]
navItems[2].textContent= siteContent["nav"]["nav-item-3"]
navItems[3].textContent= siteContent["nav"]["nav-item-4"]
navItems[4].textContent= siteContent["nav"]["nav-item-5"]
navItems[5].textContent= siteContent["nav"]["nav-item-6"]

navItems[0].className="italic";
navItems[1].className="italic";
navItems[2].className="italic";
navItems[3].className="italic";
navItems[4].className="italic";
navItems[5].className="italic";


const logoImg = document.querySelectorAll("#logo-img");
logoImg[0].setAttribute("src",siteContent.images["logo-img"])

document.getElementById("cta-img").src=siteContent.images["cta-img"]
document.getElementById("middle-img").src=siteContent.images["accent-img"]

const butt=document.querySelector(".cta-text");
butt.querySelector("h1").textContent=siteContent.cta.h1
butt.querySelector("button").textContent=siteContent.cta.button


/*but[0].textContent=siteContent.cta.h1
but[1].textContent=siteContent.cta.button

(böyle yapamıyoruz galiba burda but array yerine nesne o yuzden olabilir.)
*/


const yeni=document.querySelectorAll(".top-content .text-content");

yeni[0].querySelector("h4").textContent=siteContent["ana-içerik"]["özellikler-h4"]
yeni[0].querySelector("p").textContent=siteContent["ana-içerik"]["özellikler-içerik"]
yeni[1].querySelector("h4").textContent=siteContent["ana-içerik"]["hakkımızda-h4"]
yeni[1].querySelector("p").textContent=siteContent["ana-içerik"]["hakkımızda-içerik"]


const yenii=document.querySelectorAll(".bottom-content .text-content");

yenii[0].querySelector("h4").textContent=siteContent["ana-içerik"]["servisler-h4"]
yenii[0].querySelector("p").textContent=siteContent["ana-içerik"]["servisler-içeriği"]
yenii[1].querySelector("h4").textContent=siteContent["ana-içerik"]["ürünler-h4"]
yenii[1].querySelector("p").textContent=siteContent["ana-içerik"]["ürünler-içeriği"]
yenii[2].querySelector("h4").textContent=siteContent["ana-içerik"]["vizyon-h4"]
yenii[2].querySelector("p").textContent=siteContent["ana-içerik"]["vizyon-içeriği"]


document.querySelector(".contact h4").textContent=siteContent.iletisim["iletişim-h4"]

const yeni2=document.querySelectorAll(".contact p");
yeni2[0].textContent=siteContent.iletisim.adres
yeni2[1].textContent=siteContent.iletisim.telefon
yeni2[2].textContent=siteContent.iletisim.email

document.querySelector("footer a").textContent=siteContent.footer.copyright

document.querySelector("footer a").className="bold"








