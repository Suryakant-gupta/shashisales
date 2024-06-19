// Hide And Display Container
document.addEventListener("DOMContentLoaded", function() {
    var hideCont = document.querySelector('.hide-cont');
    var displayCont = document.getElementById('display-cont');
  
    // Check if hideCont exists before accessing its properties
    if (hideCont) {
        hideCont.style.display = 'none';
    }
  
    if (displayCont) {
        displayCont.addEventListener("click", function(event) {
            event.stopPropagation();
            if (hideCont) {
                hideCont.style.display = hideCont.style.display === 'none' ? 'block' : 'none';
            }
        });
    }
  
    document.addEventListener("click", function(event) {
        if (displayCont && !displayCont.contains(event.target) && hideCont) {
            hideCont.style.display = 'none';
        }
    });
});

  
  
  
  // Copy text
document.addEventListener("DOMContentLoaded", function() {
    var copyButton1 = document.getElementById("copyButton1");
    var copyButton2 = document.getElementById("copyButton2");
  
    if (copyButton1) {
        copyButton1.addEventListener("click", function() {
            copyTextFromParagraphs(this);
        });
    }
  
    if (copyButton2) {
        copyButton2.addEventListener("click", function() {
            copyTextFromParagraphs(this);
        });
    }
});

function copyTextFromParagraphs(button) {
    var textToCopy = "";
    var parentDiv = button.parentNode;
  
    var paragraphs = parentDiv.querySelectorAll("p");
  
    paragraphs.forEach(function(paragraph) {
        var trimmedText = paragraph.textContent.trim();
        textToCopy += trimmedText + "\n";
    });
  
    copyToDashboard(textToCopy);
}

function copyToDashboard(text) {
    var tempTextarea = document.createElement('textarea');
    tempTextarea.value = text;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextarea);
    console.log("Text copied to dashboard:", text);
}




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

document.getElementById("bor1").addEventListener("click", function() {
    updateContentAndImage(
        "Project Websites",
        "Showcasing an individual's portfolio, blog, or personal interests.",
        "Portfolio Websites",
        "Portfolios, blogs, or personal interests.",
        "Nonprofit or NGO Websites",
        "Promoting the mission, goals, and activities of nonprofit organizations.",
        "/assets/images/w-img-3.webp",
        "/assets/images/ii1.webp",
        "/assets/images/i2.webp",
        "/assets/images/i3.webp"
    );
});

document.getElementById("bor2").addEventListener("click", function() {
    updateContentAndImage(
        "Educational Websites",
        "Promoting Products Servicces, And Information About A Company",
        "Real Estate Websites",
        "Onlines Stores Facilitating The Buying Ans Selling Of Products Of Services",
        "Blogs",
        "Promoting Products Servicces, And Information About A Company",
        "/assets/images/w-img-32.webp",
        "/assets/images/i1.webp",
        "/assets/images/ii2.webp",
        "/assets/images/i3.webp"
    );
});

document.getElementById("bor3").addEventListener("click", function() {
    updateContentAndImage(
        "Business Websites",
        "Providing Information, Courses, And Resources For Educational Purposes",
        "E-Commerce Websites",
        "Featuring Property Listings, Real Estate Information, And Services",
        "Job Board",
        "Job Listings Connect Job Services With Employers",
        "/assets/images/w-img-33.webp",
        "/assets/images/i1.webp",
        "/assets/images/i2.webp",
        "/assets/images/ii3.webp"
    );
});


// ==============================================================================================================
document.getElementById("bor1").addEventListener("click", function() {
    document.getElementById("basic").style.color = "#C4C800";
    document.getElementById("standard").style.color = "";
    document.getElementById("premium").style.color = "";
    document.getElementById("bor1").style.borderBottom = "0.3vw solid #C4C800"
    document.getElementById("bor2").style.borderBottom = ""
    document.getElementById("bor3").style.borderBottom = ""
});

document.getElementById("bor2").addEventListener("click", function() {
    document.getElementById("basic").style.color = "";
    document.getElementById("standard").style.color = "#C4C800";
    document.getElementById("premium").style.color = "";
    document.getElementById("bor1").style.borderBottom = ""
    document.getElementById("bor2").style.borderBottom = "0.3vw solid #C4C800"
    document.getElementById("bor3").style.borderBottom = ""
});

document.getElementById("bor3").addEventListener("click", function() {
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
    document.getElementById("im1").src = "/assets/images/ii1.webp";
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
    document.getElementById("idp1").innerHTML = "Our website design services are tailored to meet the unique needs and branding requirements of each client. We understand that a one-size-fits-all approach doesn't work in the dynamic digital landscape. Our team of skilled designers collaborates closely with clients to create custom designs that reflect their brand identity, values, and vision.";
    document.getElementById("idh").innerHTML = "Key Features";
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
    document.getElementById("idp1").innerHTML = "In today's multi-device world, having a website that adapts to various screen sizes is paramount. Our responsive design services ensure that your website looks and functions seamlessly on desktops, laptops, tablets, and smartphones.";
    document.getElementById("idh").innerHTML = "Key Features";
    document.getElementById("idp2").innerHTML = "Cross-Device Compatibility: Optimize your website for a consistent and user-friendly experience across all devices.";
    document.getElementById("idp3").innerHTML = "Fluid Grid Layouts: Utilize fluid grid layouts to adjust the content dynamically based on screen size.";
    document.getElementById("idp4").innerHTML = "Mobile-First Approach: Prioritize mobile users by adopting a mobile-first design strategy.";
    document.getElementById("idc1").style.color = ""
    document.getElementById("idc2").style.color = "#C4C800"
    document.getElementById("idc3").style.color = ""
    document.getElementById("idc1").style.borderBottom = ""
    document.getElementById("idc2").style.borderBottom = "0.3vw solid #C4C800"
    document.getElementById("idc3").style.borderBottom = ""
}

function handleIdc3Click() {
    document.getElementById("idp1").innerHTML = "User experience (UX) is at the core of our website design philosophy. We go beyond creating visually appealing designs; we focus on crafting an intuitive and enjoyable user journey.";
    document.getElementById("idh").innerHTML = "Key Features";
    document.getElementById("idp2").innerHTML = "User-Centric Navigation: Design easy-to-navigate websites with a focus on user flow and accessibility.";
    document.getElementById("idp3").innerHTML = "Intuitive Interfaces: Create interfaces that guide users seamlessly through your website, enhancing engagement.";
    document.getElementById("idp4").innerHTML = "A/B Testing: Employ A/B testing methodologies to refine the user experience based on real user interactions and feedback.";
    document.getElementById("idc1").style.color = ""
    document.getElementById("idc2").style.color = ""
    document.getElementById("idc3").style.color = "#C4C800"
    document.getElementById("idc1").style.borderBottom = ""
    document.getElementById("idc2").style.borderBottom = ""
    document.getElementById("idc3").style.borderBottom = "0.3vw solid #C4C800"
}


// When Technologies We Use is selected
function handleIdcc1Click() {
    document.getElementById("idp1").innerHTML = "";
    document.getElementById("idh").innerHTML = "Key Features";
    document.getElementById("idp2").innerHTML = "HTML5, CSS3, JavaScript: Standard technologies for building responsive and interactive user interfaces.";
    document.getElementById("idp3").innerHTML = "React, Node, Vue.js, Angular: Frameworks for creating dynamic and modern front-end experiences.";
    document.getElementById("idp4").innerHTML = "";
    document.getElementById("idc1").style.color = "#C4C800"
    document.getElementById("idc2").style.color = ""
    document.getElementById("idc3").style.color = ""
    document.getElementById("idc1").style.borderBottom = "0.3vw solid #C4C800"
    document.getElementById("idc2").style.borderBottom = ""
    document.getElementById("idc3").style.borderBottom = ""
}

function handleIdcc2Click() {
    document.getElementById("idp1").innerHTML = "";
    document.getElementById("idh").innerHTML = "Key Features";
    document.getElementById("idp2").innerHTML = "Node.js, Drupal, Django, Ruby on Rails: Robust server-side frameworks for scalable and efficient back-end development.";
    document.getElementById("idp3").innerHTML = "PHP, Python, Java: Versatile programming languages for building powerful server-side applications.";
    document.getElementById("idp4").innerHTML = "";
    document.getElementById("idc1").style.color = ""
    document.getElementById("idc2").style.color = "#C4C800"
    document.getElementById("idc3").style.color = ""
    document.getElementById("idc1").style.borderBottom = ""
    document.getElementById("idc2").style.borderBottom = "0.3vw solid #C4C800"
    document.getElementById("idc3").style.borderBottom = ""
}

function handleIdcc3Click() {
    document.getElementById("idp1").innerHTML = "Database Management:MySQL, PostgreSQL, MongoDB: Databases tailored to the specific needs of the project, ensuring data integrity and performance.";
    document.getElementById("idh").innerHTML = "Key Features";
    document.getElementById("idp2").innerHTML = "Cloud Integration: Utilize cloud platforms for scalable infrastructure and resources.";
    document.getElementById("idp3").innerHTML = "Load Balancing: Implement load balancing strategies to distribute traffic evenly and enhance performance.";
    document.getElementById("idp4").innerHTML = "";
    document.getElementById("idc1").style.color = ""
    document.getElementById("idc2").style.color = ""
    document.getElementById("idc3").style.color = "#C4C800"
    document.getElementById("idc1").style.borderBottom = ""
    document.getElementById("idc2").style.borderBottom = ""
    document.getElementById("idc3").style.borderBottom = "0.3vw solid #C4C800"
}



// E-Commerce Solutions is selected
function handleIdccc1Click() {
    document.getElementById("idp1").innerHTML = "";
    document.getElementById("idh").innerHTML = "Key Features";
    document.getElementById("idp2").innerHTML = "Customized E-Commerce Solutions: We excel in creating tailor-made online stores, similar to the user-friendly and visually appealing interfaces of upposh.co and bhartiyabazzar.com.";
    document.getElementById("idp3").innerHTML = "Responsive Design: Our e-commerce websites are designed to provide an optimal shopping experience across various devices, ensuring accessibility for a broad audience.";
    document.getElementById("idp4").innerHTML = "";
    document.getElementById("idc1").style.color = "#C4C800"
    document.getElementById("idc2").style.color = ""
    document.getElementById("idc3").style.color = ""
    document.getElementById("idc1").style.borderBottom = "0.3vw solid #C4C800"
    document.getElementById("idc2").style.borderBottom = ""
    document.getElementById("idc3").style.borderBottom = ""
}

function handleIdccc2Click() {
    document.getElementById("idp1").innerHTML = "";
    document.getElementById("idh").innerHTML = "Key Features";
    document.getElementById("idp2").innerHTML = "PhonePe Integration: Seamlessly integrate PhonePe, allowing users to make secure and convenient transactions using their preferred payment method.";
    document.getElementById("idp3").innerHTML = "Razorpay Integration: Implement Razorpay to facilitate smooth and efficient payment processing, enhancing the overall user experience.";
    document.getElementById("idp4").innerHTML = "Stripe Integration: Enable secure transactions with Stripe, offering flexibility in payment options and ensuring the highest standards of online payment security.";
    document.getElementById("idc1").style.color = ""
    document.getElementById("idc2").style.color = "#C4C800"
    document.getElementById("idc3").style.color = ""
    document.getElementById("idc1").style.borderBottom = ""
    document.getElementById("idc2").style.borderBottom = "0.3vw solid #C4C800"
    document.getElementById("idc3").style.borderBottom = ""
}

function handleIdccc3Click() {
    document.getElementById("idp1").innerHTML = "";
    document.getElementById("idh").innerHTML = "Key Features";
    document.getElementById("idp2").innerHTML = "Dynamic Inventory Systems: Develop sophisticated inventory management systems that dynamically track product availability, preventing overselling and ensuring accurate stock levels.";
    document.getElementById("idp3").innerHTML = "Automated Updates: Implement automated inventory updates to synchronize product availability in real-time, reducing manual intervention and potential errors.";
    document.getElementById("idp4").innerHTML = "";
    document.getElementById("idc1").style.color = ""
    document.getElementById("idc2").style.color = ""
    document.getElementById("idc3").style.color = "#C4C800"
    document.getElementById("idc1").style.borderBottom = ""
    document.getElementById("idc2").style.borderBottom = ""
    document.getElementById("idc3").style.borderBottom = "0.3vw solid #C4C800"
}




// Maintainance & Support is selected
function handleIdcccc1Click() {
    document.getElementById("idp1").innerHTML = "Regular Updates: We offer continuous updates to keep your website or e-commerce platform in line with the latest industry trends, security standards, and technological advancements.";
    document.getElementById("idh").innerHTML = "";
    document.getElementById("idp2").innerHTML = "Bug Fixes: Our team is proactive in identifying and resolving any bugs or issues that may arise post-launch, ensuring a seamless user experience.";
    document.getElementById("idp3").innerHTML = "Regular Security Audits: Conduct periodic security audits to identify vulnerabilities and implement measures to safeguard your website or e-commerce store from potential threats.";
    document.getElementById("idp4").innerHTML = "Security Patch Updates: Stay ahead of security threats by promptly applying patch updates to fortify your online presence against evolving risks.";
    document.getElementById("idc1").style.color = "#C4C800"
    document.getElementById("idc2").style.color = ""
    document.getElementById("idc3").style.color = ""
    document.getElementById("idc1").style.borderBottom = "0.3vw solid #C4C800"
    document.getElementById("idc2").style.borderBottom = ""
    document.getElementById("idc3").style.borderBottom = ""
}

function handleIdcccc2Click() {
    document.getElementById("idp1").innerHTML = "Content Management: Assist in updating and managing content to keep your website or e-commerce platform relevant and engaging.";
    document.getElementById("idh").innerHTML = "";
    document.getElementById("idp2").innerHTML = "SEO Optimization: Continuously optimize content for search engines to enhance your online visibility and reach a wider audience.";
    document.getElementById("idp3").innerHTML = "Personalized Design Concepts: We present multiple design concepts based on your brand guidelines and preferences.";
    document.getElementById("idp4").innerHTML = "Performance Optimization: Implement optimizations based on performance monitoring results, enhancing loading times and overall responsiveness.";
    document.getElementById("idc1").style.color = ""
    document.getElementById("idc2").style.color = "#C4C800"
    document.getElementById("idc3").style.color = ""
    document.getElementById("idc1").style.borderBottom = ""
    document.getElementById("idc2").style.borderBottom = "0.3vw solid #C4C800"
    document.getElementById("idc3").style.borderBottom = ""
}

function handleIdcccc3Click() {
    document.getElementById("idp1").innerHTML = "Dedicated Support Team: Access our skilled and responsive support team for prompt assistance with technical issues, inquiries, or troubleshooting.";
    document.getElementById("idh").innerHTML = "";
    document.getElementById("idp2").innerHTML = "User Training: Provide ongoing training and support for your team to maximize the utilization of website features and functionalities.";
    document.getElementById("idp3").innerHTML = "Continuous Improvement: Collaborate on identifying opportunities for feature enhancements and upgrades to meet evolving business requirements.";
    document.getElementById("idp4").innerHTML = "Regular Backups: Conduct regular backups of your website or e-commerce store to prevent data loss in the event of unexpected issues. Disaster Recovery Planning: Develop and implement a comprehensive disaster recovery plan to minimize downtime and data loss.";
    document.getElementById("idc1").style.color = ""
    document.getElementById("idc2").style.color = ""
    document.getElementById("idc3").style.color = "#C4C800"
    document.getElementById("idc1").style.borderBottom = ""
    document.getElementById("idc2").style.borderBottom = ""
    document.getElementById("idc3").style.borderBottom = "0.3vw solid #C4C800"
}




// When Website Development is selected
function handleIdccccc1Click() {
    document.getElementById("idp1").innerHTML = "Discovery and Planning: Client Consultation: We initiate every project with a comprehensive consultation to understand your business, goals, and specific requirements.";
    document.getElementById("idh").innerHTML = "";
    document.getElementById("idp2").innerHTML = "Project Scope Definition: Clearly outline the project scope, objectives, and deliverables to establish a solid foundation.";
    document.getElementById("idp3").innerHTML = "Design and Prototyping: Wireframing and Mockups: Develop wireframes and design mockups to visualize the website's structure, layout, and user interface.";
    document.getElementById("idp4").innerHTML = "Client Feedback: Seek client input and feedback at every design iteration to ensure alignment with expectations.";
    document.getElementById("idc1").style.color = "#C4C800"
    document.getElementById("idc2").style.color = ""
    document.getElementById("idc3").style.color = ""
    document.getElementById("idc1").style.borderBottom = "0.3vw solid #C4C800"
    document.getElementById("idc2").style.borderBottom = ""
    document.getElementById("idc3").style.borderBottom = ""
}

function handleIdccccc2Click() {
    document.getElementById("idp1").innerHTML = "Front-End Development: Implement the design using the latest front-end technologies, ensuring a seamless and visually appealing user interface.";
    document.getElementById("idh").innerHTML = "";
    document.getElementById("idp2").innerHTML = "Back-End Development: Leverage robust back-end technologies to build the core functionality and logic of the website. Database Integration: Implement secure and efficient database structures to manage data seamlessly.";
    document.getElementById("idp3").innerHTML = "Functionality Testing: Quality Assurance: Conduct rigorous testing to identify and rectify any bugs or issues.";
    document.getElementById("idp4").innerHTML = "User Acceptance Testing (UAT): Engage clients in UAT to ensure that the website meets their expectations and performs as intended.";
    document.getElementById("idc1").style.color = ""
    document.getElementById("idc2").style.color = "#C4C800"
    document.getElementById("idc3").style.color = ""
    document.getElementById("idc1").style.borderBottom = ""
    document.getElementById("idc2").style.borderBottom = "0.3vw solid #C4C800"
    document.getElementById("idc3").style.borderBottom = ""
}

function handleIdccccc3Click() {
    document.getElementById("idp1").innerHTML = "Server Configuration: Optimize server settings for performance and security.";
    document.getElementById("idh").innerHTML = "";
    document.getElementById("idp2").innerHTML = "Deployment Strategy: Implement a strategic deployment plan to minimize downtime and ensure a smooth transition to the live environment.";
    document.getElementById("idp3").innerHTML = "Post-Launch Support: Monitoring and Maintenance: Implement monitoring tools to track website performance and address any potential issues promptly.";
    document.getElementById("idp4").innerHTML = "Technical Support: Provide ongoing technical support to address client queries and troubleshoot any post-launch issues.";
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
    document.getElementById("idc1").innerHTML = "CUSTOM";
    document.getElementById("idc2").innerHTML = "RESPONSIVE";
    document.getElementById("idc3").innerHTML = "USER EXPERIENCE";
    document.getElementById("idc1").addEventListener("click", handleIdc1Click);
    document.getElementById("idc2").addEventListener("click", handleIdc2Click);
    document.getElementById("idc3").addEventListener("click", handleIdc3Click);
}

function handleIdr2Click() {
    removeIdcEventListeners();
    document.getElementById("idc1").innerHTML = "FRONT-END";
    document.getElementById("idc2").innerHTML = "BACK-END";
    document.getElementById("idc3").innerHTML = "DBMS";
    document.getElementById("idc1").addEventListener("click", handleIdcc1Click);
    document.getElementById("idc2").addEventListener("click", handleIdcc2Click);
    document.getElementById("idc3").addEventListener("click", handleIdcc3Click);
}

function handleIdr3Click() {
    removeIdcEventListeners();
    document.getElementById("idc1").innerHTML = "ONLINE STORES";
    document.getElementById("idc2").innerHTML = "PAYMENT GATEWAYS INTEGRATION";
    document.getElementById("idc3").innerHTML = "INVENTORY MANAGEMENT";
    document.getElementById("idc1").addEventListener("click", handleIdccc1Click);
    document.getElementById("idc2").addEventListener("click", handleIdccc2Click);
    document.getElementById("idc3").addEventListener("click", handleIdccc3Click);
}

function handleIdr4Click() {
    removeIdcEventListeners();
    document.getElementById("idc1").innerHTML = "AUDIT & MAINTAINANCE";
    document.getElementById("idc2").innerHTML = "MONITORING & OPTIMIZATION";
    document.getElementById("idc3").innerHTML = "SUPPORT & RECOVERY";
    document.getElementById("idc1").addEventListener("click", handleIdcccc1Click);
    document.getElementById("idc2").addEventListener("click", handleIdcccc2Click);
    document.getElementById("idc3").addEventListener("click", handleIdcccc3Click);
}

function handleIdr5Click() {
    removeIdcEventListeners();
    document.getElementById("idc1").innerHTML = "PROTOTYPING";
    document.getElementById("idc2").innerHTML = "DEVELOPMENT";
    document.getElementById("idc3").innerHTML = "DEPLOYMENT";
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
    document.getElementById("idr1").style.borderBottom = "0.3vw solid #C4C800"
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
    document.getElementById("idr2").style.borderBottom = "0.3vw solid #C4C800"
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
    document.getElementById("idr3").style.borderBottom = "0.3vw solid #C4C800"
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
    document.getElementById("idr4").style.borderBottom = "0.3vw solid #C4C800"
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
    document.getElementById("idr5").style.borderBottom = "0.3vw solid #C4C800"
    document.getElementById("idr1").style.color = ""
    document.getElementById("idr2").style.color = ""
    document.getElementById("idr3").style.color = ""
    document.getElementById("idr4").style.color = ""
    document.getElementById("idr5").style.color = "#C4C800"
});



