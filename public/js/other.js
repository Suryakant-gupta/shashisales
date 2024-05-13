var previousImagePath = "";
var previousIconPath1 = "";
var previousIconPath2 = "";
var previousIconPath3 = "";

function updateContentAndImage(h1Text, p1Text, h2Text, p2Text, h3Text, p3Text, imagePath, iconPath1, iconPath2, iconPath3) {
    document.getElementById("premid-h1").innerHTML = h1Text;
    document.getElementById("premid-p1").innerHTML = p1Text;
    document.getElementById("premid-h2").innerHTML = h2Text;
    document.getElementById("premid-p2").innerHTML = p2Text;
    document.getElementById("premid-h3").innerHTML = h3Text;
    document.getElementById("premid-p3").innerHTML = p3Text;

    var image = document.getElementById("imgid1");
    image.src = imagePath;

    var icon1 = document.getElementById("im1");
    icon1.src = iconPath1;

    var icon2 = document.getElementById("im2");
    icon2.src = iconPath2;

    var icon3 = document.getElementById("im3");
    icon3.src = iconPath3;

    previousImagePath = imagePath;
    previousIconPath1 = iconPath1;
    previousIconPath2 = iconPath2;
    previousIconPath3 = iconPath3;
}

document.getElementById("basic").addEventListener("click", function() {
    updateContentAndImage(
        "Project Websites",
        "Showcasing an individual's portfolio, blog, or personal interests.",
        "Portfolio Websites",
        "Portfolios, blogs, or personal interests.",
        "Nonprofit or NGO Websites",
        "Promoting the mission, goals, and activities of nonprofit organizations.",
        "/assets/images/w-img-3.png",
        "/assets/images/ii1.png",
        "/assets/images/i2.png",
        "/assets/images/i3.png"
    );
});

document.getElementById("standard").addEventListener("click", function() {
    updateContentAndImage(
        "Educational Websites",
        "Promoting Products Servicces, And Information About A Company",
        "Real Estate Websites",
        "Onlines Stores Facilitating The Buying Ans Selling Of Products Of Services",
        "Blogs",
        "Promoting Products Servicces, And Information About A Company",
        "/assets/images/w-img-32.jpeg",
        "/assets/images/i1.png",
        "/assets/images/ii2.png",
        "/assets/images/i3.png"
    );
});

document.getElementById("premium").addEventListener("click", function() {
    updateContentAndImage(
        "Business Websites",
        "Providing Information, Courses, And Resources For Educational Purposes",
        "E-Commerce Websites",
        "Featuring Property Listings, Real Estate Information, And Services",
        "Job Board",
        "Job Listings Connect Job Services With Employers",
        "/assets/images/w-img-33.png",
        "/assets/images/i1.png",
        "/assets/images/i2.png",
        "/assets/images/ii3.png"
    );
});


// ==============================================================================================================
document.getElementById("basic").addEventListener("click", function() {
    document.getElementById("basic").style.color = "#C4C800";
    document.getElementById("standard").style.color = "";
    document.getElementById("premium").style.color = "";
    document.getElementById("bor1").style.borderBottom = "0.3vw solid #C4C800"
    document.getElementById("bor2").style.borderBottom = ""
    document.getElementById("bor3").style.borderBottom = ""
});

document.getElementById("standard").addEventListener("click", function() {
    document.getElementById("basic").style.color = "";
    document.getElementById("standard").style.color = "#C4C800";
    document.getElementById("premium").style.color = "";
    document.getElementById("bor1").style.borderBottom = ""
    document.getElementById("bor2").style.borderBottom = "0.3vw solid #C4C800"
    document.getElementById("bor3").style.borderBottom = ""
});

document.getElementById("premium").addEventListener("click", function() {
    document.getElementById("basic").style.color = "";
    document.getElementById("standard").style.color = "";
    document.getElementById("premium").style.color = "#C4C800";
    document.getElementById("bor1").style.borderBottom = ""
    document.getElementById("bor2").style.borderBottom = ""
    document.getElementById("bor3").style.borderBottom = "0.3vw solid #C4C800"
});

// ===============================================================================================================



// When the page loads
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("im1").src = "/assets/images/ii1.png";
    document.getElementById("basic").style.color = "#C4C800";
    document.getElementById("bor1").style.borderBottom = "0.3vw solid #C4C800"
    
    handleIdr1Click();
    document.getElementById("idr1").click();
    document.getElementById("idr1").style.borderBottom = "0.3vw solid #C4C800";
    document.getElementById("idr1").style.color = "#C4C800";

    document.getElementById("idc1").style.color = "#C4C800";
    document.getElementById("idc1").style.borderBottom = "0.3vw solid #C4C800";
});


// When Web design is selected
function handleIdc1Click() {
    document.getElementById("idp1").innerHTML = "Tailored website designs reflecting individual brand identities and visions—our team ensures a unique, client-eccentric approach.";
    document.getElementById("idp2").innerHTML = "Personalized Design Concepts: We present multiple design concepts based on your brand guidelines and preferences.";
    document.getElementById("idp3").innerHTML = "Brand Consistency: Ensure that the design aligns seamlessly with your existing brand elements for a cohesive online presence.";
    document.getElementById("idp4").innerHTML = "Visual Appeal: Craft visually stunning and engaging designs that leave a lasting impression on your website visitors.";
    document.getElementById("idc1").style.color = "#C4C800"
    document.getElementById("idc2").style.color = ""
    document.getElementById("idc3").style.color = ""
    document.getElementById("idc1").style.borderBottom = "0.3vw solid #C4C800"
    document.getElementById("idc2").style.borderBottom = ""
    document.getElementById("idc3").style.borderBottom = ""

}

function handleIdc2Click() {
    document.getElementById("idp1").innerHTML = "Idr1 Idc2";
    document.getElementById("idp2").innerHTML = "Personalized Design Concepts: We present multiple design concepts based on your brand guidelines and preferences.";
    document.getElementById("idp3").innerHTML = "Brand Consistency: Ensure that the design aligns seamlessly with your existing brand elements for a cohesive online presence.";
    document.getElementById("idp4").innerHTML = "Visual Appeal: Craft visually stunning and engaging designs that leave a lasting impression on your website visitors.";
    document.getElementById("idc1").style.color = ""
    document.getElementById("idc2").style.color = "#C4C800"
    document.getElementById("idc3").style.color = ""
    document.getElementById("idc1").style.borderBottom = ""
    document.getElementById("idc2").style.borderBottom = "0.3vw solid #C4C800"
    document.getElementById("idc3").style.borderBottom = ""
}

function handleIdc3Click() {
    document.getElementById("idp1").innerHTML = "Idr1 Idc3";
    document.getElementById("idp2").innerHTML = "Personalized Design Concepts: We present multiple design concepts based on your brand guidelines and preferences.";
    document.getElementById("idp3").innerHTML = "Brand Consistency: Ensure that the design aligns seamlessly with your existing brand elements for a cohesive online presence.";
    document.getElementById("idp4").innerHTML = "Visual Appeal: Craft visually stunning and engaging designs that leave a lasting impression on your website visitors.";
    document.getElementById("idc1").style.color = ""
    document.getElementById("idc2").style.color = ""
    document.getElementById("idc3").style.color = "#C4C800"
    document.getElementById("idc1").style.borderBottom = ""
    document.getElementById("idc2").style.borderBottom = ""
    document.getElementById("idc3").style.borderBottom = "0.3vw solid #C4C800"
}


// When Technologies We Use is selected
function handleIdcc1Click() {
    document.getElementById("idp1").innerHTML = "Idr2 Idcc1";
    document.getElementById("idp2").innerHTML = "Personalized Design Concepts: We present multiple design concepts based on your brand guidelines and preferences.";
    document.getElementById("idp3").innerHTML = "Brand Consistency: Ensure that the design aligns seamlessly with your existing brand elements for a cohesive online presence.";
    document.getElementById("idp4").innerHTML = "Visual Appeal: Craft visually stunning and engaging designs that leave a lasting impression on your website visitors.";
    document.getElementById("idc1").style.color = "#C4C800"
    document.getElementById("idc2").style.color = ""
    document.getElementById("idc3").style.color = ""
    document.getElementById("idc1").style.borderBottom = "0.3vw solid #C4C800"
    document.getElementById("idc2").style.borderBottom = ""
    document.getElementById("idc3").style.borderBottom = ""
}

function handleIdcc2Click() {
    document.getElementById("idp1").innerHTML = "Idr2 Idcc2";
    document.getElementById("idp2").innerHTML = "Personalized Design Concepts: We present multiple design concepts based on your brand guidelines and preferences.";
    document.getElementById("idp3").innerHTML = "Brand Consistency: Ensure that the design aligns seamlessly with your existing brand elements for a cohesive online presence.";
    document.getElementById("idp4").innerHTML = "Visual Appeal: Craft visually stunning and engaging designs that leave a lasting impression on your website visitors.";
    document.getElementById("idc1").style.color = ""
    document.getElementById("idc2").style.color = "#C4C800"
    document.getElementById("idc3").style.color = ""
    document.getElementById("idc1").style.borderBottom = ""
    document.getElementById("idc2").style.borderBottom = "0.3vw solid #C4C800"
    document.getElementById("idc3").style.borderBottom = ""
}

function handleIdcc3Click() {
    document.getElementById("idp1").innerHTML = "Idr2 Idcc3";
    document.getElementById("idp2").innerHTML = "Personalized Design Concepts: We present multiple design concepts based on your brand guidelines and preferences.";
    document.getElementById("idp3").innerHTML = "Brand Consistency: Ensure that the design aligns seamlessly with your existing brand elements for a cohesive online presence.";
    document.getElementById("idp4").innerHTML = "Visual Appeal: Craft visually stunning and engaging designs that leave a lasting impression on your website visitors.";
    document.getElementById("idc1").style.color = ""
    document.getElementById("idc2").style.color = ""
    document.getElementById("idc3").style.color = "#C4C800"
    document.getElementById("idc1").style.borderBottom = ""
    document.getElementById("idc2").style.borderBottom = ""
    document.getElementById("idc3").style.borderBottom = "0.3vw solid #C4C800"
}



// E-Commerce Solutions is selected
function handleIdccc1Click() {
    document.getElementById("idp1").innerHTML = "Idr3 Idccc1";
    document.getElementById("idp2").innerHTML = "Personalized Design Concepts: We present multiple design concepts based on your brand guidelines and preferences.";
    document.getElementById("idp3").innerHTML = "Brand Consistency: Ensure that the design aligns seamlessly with your existing brand elements for a cohesive online presence.";
    document.getElementById("idp4").innerHTML = "Visual Appeal: Craft visually stunning and engaging designs that leave a lasting impression on your website visitors.";
    document.getElementById("idc1").style.color = "#C4C800"
    document.getElementById("idc2").style.color = ""
    document.getElementById("idc3").style.color = ""
    document.getElementById("idc1").style.borderBottom = "0.3vw solid #C4C800"
    document.getElementById("idc2").style.borderBottom = ""
    document.getElementById("idc3").style.borderBottom = ""
}

function handleIdccc2Click() {
    document.getElementById("idp1").innerHTML = "Idr3 Idccc2";
    document.getElementById("idp2").innerHTML = "Personalized Design Concepts: We present multiple design concepts based on your brand guidelines and preferences.";
    document.getElementById("idp3").innerHTML = "Brand Consistency: Ensure that the design aligns seamlessly with your existing brand elements for a cohesive online presence.";
    document.getElementById("idp4").innerHTML = "Visual Appeal: Craft visually stunning and engaging designs that leave a lasting impression on your website visitors.";
    document.getElementById("idc1").style.color = ""
    document.getElementById("idc2").style.color = "#C4C800"
    document.getElementById("idc3").style.color = ""
    document.getElementById("idc1").style.borderBottom = ""
    document.getElementById("idc2").style.borderBottom = "0.3vw solid #C4C800"
    document.getElementById("idc3").style.borderBottom = ""
}

function handleIdccc3Click() {
    document.getElementById("idp1").innerHTML = "Idr3 Idccc3";
    document.getElementById("idp2").innerHTML = "Personalized Design Concepts: We present multiple design concepts based on your brand guidelines and preferences.";
    document.getElementById("idp3").innerHTML = "Brand Consistency: Ensure that the design aligns seamlessly with your existing brand elements for a cohesive online presence.";
    document.getElementById("idp4").innerHTML = "Visual Appeal: Craft visually stunning and engaging designs that leave a lasting impression on your website visitors.";
    document.getElementById("idc1").style.color = ""
    document.getElementById("idc2").style.color = ""
    document.getElementById("idc3").style.color = "#C4C800"
    document.getElementById("idc1").style.borderBottom = ""
    document.getElementById("idc2").style.borderBottom = ""
    document.getElementById("idc3").style.borderBottom = "0.3vw solid #C4C800"
}




// Maintainance & Support is selected
function handleIdcccc1Click() {
    document.getElementById("idp1").innerHTML = "Idr4 Idcccc1";
    document.getElementById("idp2").innerHTML = "Personalized Design Concepts: We present multiple design concepts based on your brand guidelines and preferences.";
    document.getElementById("idp3").innerHTML = "Brand Consistency: Ensure that the design aligns seamlessly with your existing brand elements for a cohesive online presence.";
    document.getElementById("idp4").innerHTML = "Visual Appeal: Craft visually stunning and engaging designs that leave a lasting impression on your website visitors.";
    document.getElementById("idc1").style.color = "#C4C800"
    document.getElementById("idc2").style.color = ""
    document.getElementById("idc3").style.color = ""
    document.getElementById("idc1").style.borderBottom = "0.3vw solid #C4C800"
    document.getElementById("idc2").style.borderBottom = ""
    document.getElementById("idc3").style.borderBottom = ""
}

function handleIdcccc2Click() {
    document.getElementById("idp1").innerHTML = "Idr4 Idcccc2";
    document.getElementById("idp2").innerHTML = "Personalized Design Concepts: We present multiple design concepts based on your brand guidelines and preferences.";
    document.getElementById("idp3").innerHTML = "Brand Consistency: Ensure that the design aligns seamlessly with your existing brand elements for a cohesive online presence.";
    document.getElementById("idp4").innerHTML = "Visual Appeal: Craft visually stunning and engaging designs that leave a lasting impression on your website visitors.";
    document.getElementById("idc1").style.color = ""
    document.getElementById("idc2").style.color = "#C4C800"
    document.getElementById("idc3").style.color = ""
    document.getElementById("idc1").style.borderBottom = ""
    document.getElementById("idc2").style.borderBottom = "0.3vw solid #C4C800"
    document.getElementById("idc3").style.borderBottom = ""
}

function handleIdcccc3Click() {
    document.getElementById("idp1").innerHTML = "Idr4 Idcccc3";
    document.getElementById("idp2").innerHTML = "Personalized Design Concepts: We present multiple design concepts based on your brand guidelines and preferences.";
    document.getElementById("idp3").innerHTML = "Brand Consistency: Ensure that the design aligns seamlessly with your existing brand elements for a cohesive online presence.";
    document.getElementById("idp4").innerHTML = "Visual Appeal: Craft visually stunning and engaging designs that leave a lasting impression on your website visitors.";
    document.getElementById("idc1").style.color = ""
    document.getElementById("idc2").style.color = ""
    document.getElementById("idc3").style.color = "#C4C800"
    document.getElementById("idc1").style.borderBottom = ""
    document.getElementById("idc2").style.borderBottom = ""
    document.getElementById("idc3").style.borderBottom = "0.3vw solid #C4C800"
}




// When Website Development is selected
function handleIdccccc1Click() {
    document.getElementById("idp1").innerHTML = "Idr5 Idccccc1";
    document.getElementById("idp2").innerHTML = "Personalized Design Concepts: We present multiple design concepts based on your brand guidelines and preferences.";
    document.getElementById("idp3").innerHTML = "Brand Consistency: Ensure that the design aligns seamlessly with your existing brand elements for a cohesive online presence.";
    document.getElementById("idp4").innerHTML = "Visual Appeal: Craft visually stunning and engaging designs that leave a lasting impression on your website visitors.";
    document.getElementById("idc1").style.color = "#C4C800"
    document.getElementById("idc2").style.color = ""
    document.getElementById("idc3").style.color = ""
    document.getElementById("idc1").style.borderBottom = "0.3vw solid #C4C800"
    document.getElementById("idc2").style.borderBottom = ""
    document.getElementById("idc3").style.borderBottom = ""
}

function handleIdccccc2Click() {
    document.getElementById("idp1").innerHTML = "Idr5 Idccccc2";
    document.getElementById("idp2").innerHTML = "Personalized Design Concepts: We present multiple design concepts based on your brand guidelines and preferences.";
    document.getElementById("idp3").innerHTML = "Brand Consistency: Ensure that the design aligns seamlessly with your existing brand elements for a cohesive online presence.";
    document.getElementById("idp4").innerHTML = "Visual Appeal: Craft visually stunning and engaging designs that leave a lasting impression on your website visitors.";
    document.getElementById("idc1").style.color = ""
    document.getElementById("idc2").style.color = "#C4C800"
    document.getElementById("idc3").style.color = ""
    document.getElementById("idc1").style.borderBottom = ""
    document.getElementById("idc2").style.borderBottom = "0.3vw solid #C4C800"
    document.getElementById("idc3").style.borderBottom = ""
}

function handleIdccccc3Click() {
    document.getElementById("idp1").innerHTML = "Idr5 Idccccc3";
    document.getElementById("idp2").innerHTML = "Personalized Design Concepts: We present multiple design concepts based on your brand guidelines and preferences.";
    document.getElementById("idp3").innerHTML = "Brand Consistency: Ensure that the design aligns seamlessly with your existing brand elements for a cohesive online presence.";
    document.getElementById("idp4").innerHTML = "Visual Appeal: Craft visually stunning and engaging designs that leave a lasting impression on your website visitors.";
    document.getElementById("idc1").style.color = ""
    document.getElementById("idc2").style.color = ""
    document.getElementById("idc3").style.color = "#C4C800"
    document.getElementById("idc1").style.borderBottom = ""
    document.getElementById("idc2").style.borderBottom = ""
    document.getElementById("idc3").style.borderBottom = "0.3vw solid #C4C800"
}



document.getElementById("idc1").addEventListener("click", handleIdc1Click);
document.getElementById("idc2").addEventListener("click", handleIdc2Click);
document.getElementById("idc3").addEventListener("click", handleIdc3Click);

function handleIdr1Click() {
    removeIdcEventListeners();
    document.getElementById("idc1").addEventListener("click", handleIdc1Click);
    document.getElementById("idc2").addEventListener("click", handleIdc2Click);
    document.getElementById("idc3").addEventListener("click", handleIdc3Click);
}

function handleIdr2Click() {
    removeIdcEventListeners();
    document.getElementById("idc1").addEventListener("click", handleIdcc1Click);
    document.getElementById("idc2").addEventListener("click", handleIdcc2Click);
    document.getElementById("idc3").addEventListener("click", handleIdcc3Click);
}

function handleIdr3Click() {
    removeIdcEventListeners();
    document.getElementById("idc1").addEventListener("click", handleIdccc1Click);
    document.getElementById("idc2").addEventListener("click", handleIdccc2Click);
    document.getElementById("idc3").addEventListener("click", handleIdccc3Click);
}

function handleIdr4Click() {
    removeIdcEventListeners();
    document.getElementById("idc1").addEventListener("click", handleIdcccc1Click);
    document.getElementById("idc2").addEventListener("click", handleIdcccc2Click);
    document.getElementById("idc3").addEventListener("click", handleIdcccc3Click);
}

function handleIdr5Click() {
    removeIdcEventListeners();
    document.getElementById("idc1").addEventListener("click", handleIdccccc1Click);
    document.getElementById("idc2").addEventListener("click", handleIdccccc2Click);
    document.getElementById("idc3").addEventListener("click", handleIdccccc3Click);
}
function removeIdcEventListeners() {
    document.getElementById("idc1").removeEventListener("click", handleIdc1Click);
    document.getElementById("idc2").removeEventListener("click", handleIdc2Click);
    document.getElementById("idc3").removeEventListener("click", handleIdc3Click);
    document.getElementById("idc1").removeEventListener("click", handleIdcc1Click);
    document.getElementById("idc2").removeEventListener("click", handleIdcc2Click);
    document.getElementById("idc3").removeEventListener("click", handleIdcc3Click);
    document.getElementById("idc1").removeEventListener("click", handleIdccc1Click);
    document.getElementById("idc2").removeEventListener("click", handleIdccc2Click);
    document.getElementById("idc3").removeEventListener("click", handleIdccc3Click);
    document.getElementById("idc1").removeEventListener("click", handleIdcccc1Click);
    document.getElementById("idc2").removeEventListener("click", handleIdcccc2Click);
    document.getElementById("idc3").removeEventListener("click", handleIdcccc3Click);
    document.getElementById("idc1").removeEventListener("click", handleIdccccc1Click);
    document.getElementById("idc2").removeEventListener("click", handleIdccccc2Click);
    document.getElementById("idc3").removeEventListener("click", handleIdccccc3Click);
}


document.getElementById("idr1").addEventListener("click", function() {
    handleIdr1Click();
    document.getElementById("idc1").click();
    document.getElementById("idr1").style.borderBottom = "3px solid #C4C800"
    document.getElementById("idr2").style.borderBottom = ""
    document.getElementById("idr3").style.borderBottom = ""
    document.getElementById("idr4").style.borderBottom = ""
    document.getElementById("idr5").style.borderBottom = ""
    document.getElementById("idr1").style.color = "#C4C800"
    document.getElementById("idr2").style.color = ""
    document.getElementById("idr3").style.color = ""
    document.getElementById("idr4").style.color = ""
    document.getElementById("idr5").style.color = ""
});
document.getElementById("idr2").addEventListener("click", function() {
    handleIdr2Click();
    document.getElementById("idc1").click();
    document.getElementById("idr1").style.borderBottom = ""
    document.getElementById("idr2").style.borderBottom = "3px solid #C4C800"
    document.getElementById("idr3").style.borderBottom = ""
    document.getElementById("idr4").style.borderBottom = ""
    document.getElementById("idr5").style.borderBottom = ""
    document.getElementById("idr1").style.color = ""
    document.getElementById("idr2").style.color = "#C4C800"
    document.getElementById("idr3").style.color = ""
    document.getElementById("idr4").style.color = ""
    document.getElementById("idr5").style.color = ""
});
document.getElementById("idr3").addEventListener("click", function() {
    handleIdr3Click();
    document.getElementById("idc1").click();
    document.getElementById("idr1").style.borderBottom = ""
    document.getElementById("idr2").style.borderBottom = ""
    document.getElementById("idr3").style.borderBottom = "3px solid #C4C800"
    document.getElementById("idr4").style.borderBottom = ""
    document.getElementById("idr5").style.borderBottom = ""
    document.getElementById("idr1").style.color = ""
    document.getElementById("idr2").style.color = ""
    document.getElementById("idr3").style.color = "#C4C800"
    document.getElementById("idr4").style.color = ""
    document.getElementById("idr5").style.color = ""
});
document.getElementById("idr4").addEventListener("click", function() {
    handleIdr4Click();
    document.getElementById("idc1").click();
    document.getElementById("idr1").style.borderBottom = ""
    document.getElementById("idr2").style.borderBottom = ""
    document.getElementById("idr3").style.borderBottom = ""
    document.getElementById("idr4").style.borderBottom = "3px solid #C4C800"
    document.getElementById("idr5").style.borderBottom = ""
    document.getElementById("idr1").style.color = ""
    document.getElementById("idr2").style.color = ""
    document.getElementById("idr3").style.color = ""
    document.getElementById("idr4").style.color = "#C4C800"
    document.getElementById("idr5").style.color = ""
});
document.getElementById("idr5").addEventListener("click", function() {
    handleIdr5Click();
    document.getElementById("idc1").click();
    document.getElementById("idr1").style.borderBottom = ""
    document.getElementById("idr2").style.borderBottom = ""
    document.getElementById("idr3").style.borderBottom = ""
    document.getElementById("idr4").style.borderBottom = ""
    document.getElementById("idr5").style.borderBottom = "3px solid #C4C800"
    document.getElementById("idr1").style.color = ""
    document.getElementById("idr2").style.color = ""
    document.getElementById("idr3").style.color = ""
    document.getElementById("idr4").style.color = ""
    document.getElementById("idr5").style.color = "#C4C800"
});



