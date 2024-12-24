document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            const audio = new Audio('sound/meow.mp3');
            event.preventDefault();
            audio.play();
            audio.onended = function () {
                window.location.href = link.href;
            };
        });
    });
});
const translations = {
    en: {
        title: "HUGO",
        job: "Graphic Designer | Sound Engineer | Father of 3",
        des: "Hi, I’m Hugo, a graphic designer with a passion for crafting visuals that leave a lasting impression. Designing everything from bold branding to elegant layouts. My approach is all about thoughtful details and fresh ideas, creating designs that truly connect. Also, I love my cats a lot (You can tell).",
        buttontext: "Find out more!",
        aboutmetext: "After graduating from Phu Nhuan High School, I am now a student at RMIT University, further developing my skills in design. My strengths include coming up with innovative concepts quickly, collaborating effectively with teams, and maintaining an enthusiastic approach to every project. I love turning ideas into visual stories and thrive in environments where creativity and teamwork meet.",
        kinhnghiem2024: "Music Producer at RMIT Music Club <br>Freelance designer",
        kinhnghiem2021: "Phu Nhuan High School students <br> Music Club Management Team Member",
        kinhnghiem2016: "Nguyen Van Be Secondary school students <br> Distinguished Member of Arts Team",
        seemore: "See more",
        seeless: "See less",
        browse: "Browse my works →",
        getintouch: "GET IN TOUCH",
        sms:" MESSAGE ME",
        submit:"SUBMIT"
    },
    vi: {
        title: "HUGO",
        job: "Thiết kế đồ họa | Kỹ sư âm thanh | Ba ba đứa",
        des: "Chào, mình là Hugo, một nhà thiết kế đồ họa với niềm đam mê tạo ra những hình ảnh để lại ấn tượng lâu dài. Mình thiết kế mọi thứ từ táo bạo đến thanh lịch với các chi tiết chu đáo và ý tưởng mới mẻ, tạo ra các thiết kế thực sự kết nối. Và tui rất yêu mều của mình (Nhìn là hiểu mà ha).",
        buttontext: "Tìm hiểu thêm!",
        aboutmetext: "Sau khi tốt nghiệp THPT Phú Nhuận, mình hiện là sinh viên tại Đại học RMIT, nơi mình không ngừng học hỏi và phát triển. Điểm mạnh của mình là khả năng sáng tạo, làm việc nhóm hiệu quả và luôn giữ tinh thần nhiệt huyết trong mọi dự án. Mình thích biến ý tưởng độc đáo thành các câu chuyện hình ảnh đầy cảm hứng. Môi trường sáng tạo và tinh thần hợp tác luôn là ưu tiên của mình.",
        kinhnghiem2024: "Nhà sản xuất âm nhạc tại RMIT Music Club <br>Thiết kế tự do",
        kinhnghiem2021: "Học sinh trường THPT Phú Nhuận <br> Ban Quản lý CLB Âm nhạc",
        kinhnghiem2016: "Học sinh trường THCS Nguyễn Văn Bé <br> Thành viên xuất sắc của Đội Nghệ thuật",
        seemore: "Xem thêm",
        seeless: "Xem bớt",
        browse: "Tham quan các tác phẩm →",
        getintouch: "LIÊN HỆ VỚI MÌNH QUA",
        sms: "ĐỂ LẠI LỜI NHẮN",
        submit:"GỬI"
    }
};

function applyTranslations(language) {
    const translation = translations[language];
    if (!translation) return;

    
    const titleElement = document.getElementById('title');
    if (titleElement) titleElement.textContent = translation.title;

    const submitElement = document.getElementById('submit');
    if (submitElement) submitElement.textContent = translation.submit;
    const jobElement = document.getElementById('job');
    if (jobElement) jobElement.textContent = translation.job;

    const desElement = document.getElementById('des');
    if (desElement) desElement.textContent = translation.des;

    const buttonTextElement = document.getElementById('buttontext');
    if (buttonTextElement) buttonTextElement.textContent = translation.buttontext;

    const aboutMeTextElement = document.getElementById('aboutmetext');
    if (aboutMeTextElement) aboutMeTextElement.textContent = translation.aboutmetext;

    const kinhnghiem2024Element = document.getElementById('kinhnghiem2024');

    if (kinhnghiem2024Element) kinhnghiem2024Element.innerHTML = translation.kinhnghiem2024;

    const kinhnghiem2021Element = document.getElementById('kinhnghiem2021');
    if (kinhnghiem2021Element) kinhnghiem2021Element.innerHTML = translation.kinhnghiem2021;

    const kinhnghiem2016Element = document.getElementById('kinhnghiem2016');
    if (kinhnghiem2016Element) kinhnghiem2016Element.innerHTML = translation.kinhnghiem2016;

    const seelessElement = document.getElementById('seeless');
    if (seelessElement) seelessElement.textContent = translation.seeless;
    const seemoreElement = document.getElementById('seemore');
    if (seemoreElement) seemoreElement.textContent = translation.seemore;
    const browseElement = document.getElementById('browse');
    if (browseElement) browseElement.textContent = translation.browse;
    const getInTouchElement = document.getElementById('getintouch');
    if (getInTouchElement) getInTouchElement.textContent = translation.getintouch;

    const smsElement = document.getElementById('sms');
    if (smsElement) smsElement.textContent = translation.sms;

}

document.addEventListener('DOMContentLoaded', function () {
    const engToggle = document.getElementById('eng-toggle');
    const vieToggle = document.getElementById('vie-toggle');
    const savedLanguage = localStorage.getItem('language') || 'en';

    // Apply saved language
    applyTranslations(savedLanguage);

    // Add event listeners for language toggles
    if (engToggle) {
        engToggle.addEventListener('click', function () {
            applyTranslations('en');
            localStorage.setItem('language', 'en');
            updateWorkDetails();
        });
    }

    if (vieToggle) {
        vieToggle.addEventListener('click', function () {
            applyTranslations('vi');
            localStorage.setItem('language', 'vi');
            updateWorkDetails();
        });
    }
});



   

function applyDarkMode(isDarkMode) {
    const anchor = document.getElementById('anchor');
    const abtheadline = document.getElementById('abtheadline');
    const expheadline = document.getElementById('expheadline');
    const prjheadline = document.getElementById('prjheadline');
    const htmlElement = document.querySelector('html');
    const buttonBox = document.getElementById('buttonbox');
    const roundbutton = document.getElementById('roundbutton');
    const buttonText = document.getElementById('buttontext');
    const des = document.getElementById('des');
    const jobBox = document.getElementById('jobbox');
    const engToggle = document.getElementById('eng-toggle');
    const vieToggle = document.getElementById('vie-toggle');
    const profilelight = document.getElementById('profilelight');
    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');
    const catbackgrounddark = document.getElementById('catbackgrounddark');
    const catbackgroundlight = document.getElementById('catbackgroundlight');
    const position = document.getElementById('position');
  //  const workdetail = document.getElementById('workdetail');
    const watchhere = document.getElementById('watchhere');
    const bongtailwork = document.getElementById('bongtailwork');
    const mytailwork = document.getElementById('mytailwork');
    const browse = document.getElementById('browse');
    const smsElement = document.getElementById('sms');
    const getInTouchElement = document.getElementById('getintouch');
    const contactInputs = document.getElementsByClassName('contactinput');
    const submit = document.getElementById('submit');
    
    for (let i = 0; i < contactInputs.length; i++) {
        const input = contactInputs[i];
        if (isDarkMode) {
            input.style.backgroundColor = '#3713AD';
            input.style.color = '';
        } else {
            input.style.backgroundColor = '';
            input.style.color = '';
        }
    }

    if (isDarkMode) {

        if (engToggle) engToggle.style.color = '#7675B6';
        if (vieToggle) vieToggle.style.color = '#7675B6';
        htmlElement.style.backgroundColor = '#161546';
        if (buttonBox) buttonBox.style.backgroundColor = '#3713AD';
        if (roundbutton) roundbutton.style.backgroundColor = '#ffcb13';
        if (buttonText) buttonText.style.color = 'white';
        if (des) des.style.color = '#7675B6';
        if (jobBox) jobBox.style.backgroundColor = '#3713AD';
        if (browse) browse.style.color = '#7675B6';
        if (profilelight) profilelight.style.opacity = '0';
        if (moon) moon.style.display = 'none';
        if (sun) sun.style.display = '';
        if (catbackgrounddark) catbackgrounddark.style.opacity = '1';
        if (catbackgroundlight) catbackgroundlight.style.opacity = '0';
        if (position) position.style.backgroundColor = '#3713AD';
       // if (workdetail) workdetail.style.color = '#7675B6';
        if (watchhere) watchhere.style.backgroundColor = '#3713AD';
        if (anchor) {
            anchor.src = 'images/my no eye.PNG';
        }
        if (mytailwork) mytailwork.style.opacity = '1';
        if (bongtailwork) bongtailwork.style.opacity = '0';
        if (abtheadline) abtheadline.style.color = '#7675B6';
        if (expheadline) expheadline.style.color = '#7675B6';
        if (prjheadline) prjheadline.style.color = '#7675B6';
        if (smsElement) smsElement.style.color = '#7675B6';
        if (getInTouchElement) getInTouchElement.style.color = '#7675B6';
        if (submit) submit.style.backgroundColor = '#7675B6';
    } else {
        if (engToggle) engToggle.style.color = '';
        if (vieToggle) vieToggle.style.color = '';


        htmlElement.style.backgroundColor = '';
        if (buttonBox) buttonBox.style.backgroundColor = '';
        if (roundbutton) roundbutton.style.backgroundColor = '';
        if (buttonText) buttonText.style.color = '';
        if (des) des.style.color = '';
        if (jobBox) jobBox.style.backgroundColor = '';
        if (profilelight) profilelight.style.opacity = '';
        if (sun) sun.style.display = 'none';
        if (moon) moon.style.display = '';
        if (catbackgrounddark) catbackgrounddark.style.opacity = '0';
        if (catbackgroundlight) catbackgroundlight.style.opacity = '1';
        if (position) position.style.backgroundColor = '';
     //   if (workdetail) workdetail.style.color = '';
        if (watchhere) watchhere.style.backgroundColor = '';
        if (anchor) {
            anchor.src = 'images/bong no eye.PNG'; 
        
        }
        if (browse) browse.style.color = '';
        if (mytailwork) mytailwork.style.opacity = '0';
        if (bongtailwork) bongtailwork.style.opacity = '1';
        if (abtheadline) abtheadline.style.color = '';
        if (expheadline) expheadline.style.color = '';
        if (prjheadline) prjheadline.style.color = '';
        if (smsElement) smsElement.style.color = '';
        if (getInTouchElement) getInTouchElement.style.color = '';
        if (submit) submit.style.backgroundColor = '';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const roundbutton = document.getElementById('roundbutton');
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Apply dark mode based on saved state
    applyDarkMode(isDarkMode);

    // Add event listener for toggling dark mode
    if (roundbutton) {
        roundbutton.addEventListener('click', function () {
            const isCurrentlyDark = document.querySelector('html').style.backgroundColor === 'rgb(22, 21, 70)';
            const newDarkModeState = !isCurrentlyDark;

            applyDarkMode(newDarkModeState);
            localStorage.setItem('darkMode', newDarkModeState);
        });
    }
});

// Navigate to another page
const buttonBox = document.getElementById('buttonbox');
if (buttonBox) {
    buttonBox.addEventListener('click', function () {
        window.location.href = 'about.html';
    });
}

const homeLink = document.querySelector('.home-link');
if (homeLink) {
    homeLink.addEventListener('click', function () {
        window.location.href = 'index.html';
    });
}
/*----CONTACT----*/
document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit');
    if (submitButton) {
        submitButton.addEventListener('click', function () {
            alert('Thank you for leaving a message, I will get back to you soon!');
        });
    }
});
/*------WORKS------*/
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (slides.length === 0) return; // Ensure slides exist

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
    }
    if (slideIndex > 0 && slideIndex <= slides.length) {
        slides[slideIndex - 1].style.opacity = "1";
    } else {
        console.error("slideIndex is out of bounds");
    }
    updateWorkDetails();
}

const seeMoreButton = document.getElementById('seemore');
if (seeMoreButton) { }
// Add your event listener or other logic here
seeMoreButton.addEventListener('click', function () {
    const workDetailElement = document.getElementById('workdetail');
    const positionElement = document.getElementById('position');
    const seelessElement = document.getElementById('seeless');
    const watchHereElement = document.getElementById('watchhere');
    if (workDetailElement && positionElement) {
        if (workDetailElement.style.display === 'block') {
            workDetailElement.style.display = 'none';
            seelessElement.style.display = 'none';
            positionElement.style.display = 'none';
            watchHereElement.style.display = 'none';
            seeMoreButton.style.display = 'none';
            seeMoreButton.textContent = translations[localStorage.getItem('language') || 'en'].seemore;
        } else {
            workDetailElement.style.display = 'block';
            seelessElement.style.display = 'grid';
            positionElement.style.display = 'block';
            seeMoreButton.style.display = 'none';
            watchHereElement.style.display = 'block';
            window.scrollBy(0, 400);
        }
    }
});



const seelessButton = document.getElementById('seeless');
if (seelessButton) {
    seelessButton.addEventListener('click', function () {
        const workDetailElement = document.getElementById('workdetail');
        const positionElement = document.getElementById('position');
        const seeMoreButton = document.getElementById('seemore');
        const watchHereElement = document.getElementById('watchhere');
        if (workDetailElement && positionElement) {
            if (workDetailElement.style.display === 'block') {
                workDetailElement.style.display = 'none';
                seelessButton.style.display = 'none';
                positionElement.style.display = 'none';
                watchHereElement.style.display = 'none';
                seeMoreButton.style.display = 'grid';
                seeMoreButton.textContent = translations[localStorage.getItem('language') || 'en'].seemore;
            } else {
                workDetailElement.style.display = 'block';
                seelessButton.style.display = 'block';
                positionElement.style.display = 'block';
                seeMoreButton.style.display = 'none';
                watchHereElement.style.display = 'block';
                window.scrollBy(0, 400);
            }
        }
    });
}


function updateWorkDetails() {
    const workTitles = [
        "HOÀ NHỊP GIÁNG SINH",
        "KO YÊU CŨNG CHẲNG CÔ ĐƠN",
        "LEAD ME TO SOMEWHERE?",
        "GAME HONG? ICON DESIGN",
        "UNIGLOW INFOGRAPHIC",
        "FIESTA VIVA UX/UI DESIGN"
    ];
    const workYears = [
        "2021",
        "2023",
        "2024",
        "2024",
        "2024",
        "2024"
    ];


    const positions = {
        en: [
            " Project Manager, Audio Engineer ",
            "Sound Engineer",
            "Director, Visual Effects Editor",
            "Concept Developer, Graphic Designer",
            "Concept Developer, Graphic Designer",
            "Web Developer, UX/UI Designer"
        ],
        vi: [
            " Quản lý dự án, Kỹ sư âm thanh ",
            "Kỹ sư âm thanh",
            "Đạo diễn, Biên tập hiệu ứng hình ảnh",
            "Phát triển ý tưởng, Thiết kế đồ họa",
            "Phát triển ý tưởng, Thiết kế đồ họa",
            " Nhà phát triển web, Thiết kế UX/UI"
        ]
    };
    const types = [
        "Type: Video",
        "Sound Engineering",
        "Freelance",
        "Graphic Design",
        "Sound Engineering",
        "Freelance"
    ];
    const watchHere = {
        en: [
            "Watch here",
            "Watch here",
            "Watch here",
            "See here",
            "See here",
            "See here"
        ],
        vi: [
            "Xem ngay",
            "Xem ngay",
            "Xem tại đây",
            "Xem tại đây",
            "Xem tại đây",
            "Xem tại đây"
        ]
    };
    const workDetails = {
        en: [
            "Hòa Nhịp Giáng Sinh is a project created to bring joy and festive cheer to audiences during the Christmas season. Despite the challenges posed by the COVID-19 pandemic, the PNY club management team worked tirelessly to deliver a meaningful gift. Each participant recorded and `fi`lmed their parts at home using their phones, yet the team ensured that the final product maintained a high level of quality and refinement. This is also the club’s first Christmas project, paving the way for future initiatives by PNY.",
            "The collaboration between the talented vocalists and musicians from EMC Nguyen Du High School and The Youth Phu Nhuan High School is supported by meticulous and professional sound engineering. Every detail, from balancing individual tracks to finalizing the mix, is carefully handled to deliver a dynamic and high-quality audio experience for the audience.",
            "Lead me to somewhere? takes you on an exciting journey into a bizarre dimension, blending the wonder of *Wonderland* with stunning visual effects and creative editing. The experience is immersive and intriguing, leaving viewers wondering about the twists and turns that await. With its unique mix of fantastical elements and mind-bending visuals, this piece is both fun and captivating to watch, drawing you deeper into its surreal world.",
            "Game Hong? aims to capture the essence of nostalgia through the use of black and white visuals and grainy textures, creating a vintage feel that transports viewers to a different time. By combining these elements, the project evokes memories of classic games and moments from the past, giving them a fresh yet familiar look. The goal is to blend the timeless appeal of games with a sense of history, allowing audiences to reflect on how far games have come while still appreciating their roots.",
            "UNIGLOW is an innovative infographic designed to showcase a variety of Unilever products. Featuring interactive gameplay, it delivers practical information alongside a basic step-by-step skincare routine. The project aims to offer an engaging activity while providing valuable insights into the beauty industry. With its straightforward instructions, UNIGLOW ensures a seamless and enjoyable experience for all users.",
            "Fiesta Viva is a vibrant website created for a Mexico-themed festival. The site provides detailed information about the festival, its activities, and features an interactive shopping cart section. To capture the essence of the celebration, the website uses vibrant colors and incorporates traditional Mexican patterns, creating an immersive and visually engaging experience for users. The combination of bold hues and cultural designs helps bring the festive atmosphere to life, ensuring visitors feel the excitement and energy of the festival."
        ],
        vi: [
            "Hòa Nhịp Giáng Sinh là một dự án được thực hiện nhằm mang đến niềm vui và không khí lễ hội cho khán giả trong mùa Giáng Sinh. Dù đối mặt với những thách thức từ đại dịch COVID-19, Ban Quản Trị CLB PNY đã nỗ lực không ngừng để tạo ra một món quà ý nghĩa. Mỗi thành viên đều tự ghi hình và thu âm tại nhà bằng điện thoại, nhưng đội ngũ vẫn đảm bảo sản phẩm cuối cùng đạt được chất lượng cao và tinh tế. Đây cũng là dự án Giáng Sinh đầu tiên của CLB, mở đường cho các sáng kiến tương lai của PNY.",
            "Sự kết hợp giữa các giọng ca và nhạc công tài năng đến từ EMC THPT Nguyễn Du và The Youth THPT Phú Nhuận được hỗ trợ bởi công tác xử lý âm thanh tỉ mỉ và chuyên nghiệp. Từng chi tiết từ cân chỉnh các track nhạc đến hoàn thiện bản phối đều được thực hiện kỹ lưỡng, nhằm mang lại một trải nghiệm âm thanh sống động và chất lượng cho khán giả.",
            "Lead me to somewhere? đưa bạn vào một hành trình thú vị vào một chiều không gian kỳ lạ, kết hợp sự kỳ diệu của *Wonderland* với các hiệu ứng hình ảnh ấn tượng và chỉnh sửa sáng tạo. Trải nghiệm này rất cuốn hút và đầy tính khám phá, khiến người xem phải tự hỏi về những bất ngờ sẽ xảy ra. Với sự kết hợp độc đáo giữa các yếu tố kỳ bí và hình ảnh ảo diệu, tác phẩm này không chỉ thú vị mà còn hấp dẫn, đưa người xem vào một thế giới siêu thực đầy bí ẩn.",
            "Game Hong? nhằm tái hiện cảm giác hoài niệm thông qua việc sử dụng hình ảnh đen trắng và kết cấu hạt phim, tạo ra một cảm giác cổ điển, đưa người xem trở lại một thời kỳ khác. Bằng cách kết hợp các yếu tố này, dự án gợi lên những ký ức về các trò chơi và khoảnh khắc quá khứ, mang đến một cái nhìn vừa mới mẻ vừa quen thuộc. Mục tiêu là kết hợp sức hấp dẫn vượt thời gian của các trò chơi với một cảm giác lịch sử, cho phép khán giả suy ngẫm về sự phát triển của trò chơi đồng thời trân trọng những giá trị cội nguồn của chúng.",
            "UNIGLOW là một infographic sáng tạo được thiết kế để giới thiệu đa dạng các sản phẩm của Unilever. Với tính năng trò chơi tương tác, UNIGLOW cung cấp thông tin hữu ích cùng hướng dẫn cơ bản về quy trình chăm sóc da từng bước. Dự án hướng đến mục tiêu mang lại hoạt động thú vị, đồng thời cung cấp kiến thức giá trị trong lĩnh vực làm đẹp. Nhờ vào hướng dẫn đơn giản, UNIGLOW đảm bảo mọi người đều có thể trải nghiệm một cách dễ dàng và trọn vẹn.",
            "Fiesta Viva là một trang web sôi động dành cho lễ hội mang chủ đề Mexico. Trang web cung cấp thông tin chi tiết về lễ hội, các hoạt động diễn ra và có một phần giỏ hàng tương tác. Để mang lại không khí lễ hội, trang web sử dụng màu sắc tươi sáng và kết hợp các họa tiết truyền thống của Mexico, tạo nên một trải nghiệm trực quan và sinh động cho người dùng. Sự kết hợp giữa màu sắc rực rỡ và các thiết kế văn hóa giúp không khí lễ hội trở nên sống động, khiến người xem cảm nhận được sự hứng khởi và năng lượng của sự kiện.",
        ]
    };


    const workTitleElement = document.getElementById('worktitle');
    const workYearElement = document.getElementById('workyear');
    const workDetailElement = document.getElementById('workdetail');
    const positionElement = document.getElementById('position');
    const typeElement = document.getElementById('type');
    const watchHereElement = document.getElementById('watchhere');

    const currentLanguage = localStorage.getItem('language') || 'en';

    if (workTitleElement) workTitleElement.textContent = workTitles[slideIndex - 1];
    if (workYearElement) workYearElement.textContent = workYears[slideIndex - 1];
    if (workDetailElement) workDetailElement.textContent = workDetails[currentLanguage][slideIndex - 1];
    if (positionElement) positionElement.textContent = positions[currentLanguage][slideIndex - 1];
    if (typeElement) typeElement.textContent = types[slideIndex - 1];
    if (watchHereElement) watchHereElement.textContent = watchHere[currentLanguage][slideIndex - 1];
}

document.addEventListener('DOMContentLoaded', function () {
    updateWorkDetails();
});
const watchHereButton = document.getElementById('watchhere');
if (watchHereButton) {
    watchHereButton.addEventListener('click', function () {
        const links = [
            "https://www.facebook.com/share/v/15XnHkKNFA/",
            "https://www.facebook.com/share/v/15sF91VdC4/",
            "https://youtu.be/e9Dcg0PIPbs",
            "https://www.behance.net/gallery/214623599/GAME-HONG",
            "https://www.behance.net/gallery/214625737/UNI-GLOW",
            "https://www.behance.net/gallery/214626593/FIESTA-VIVA"
        ];
        window.open(links[slideIndex - 1], '_blank');
    });
}

//EYE MOVE
document.addEventListener('mousemove', (e) => {
console.log(e);

const mouseX = e.clientX;
const mouseY = e.clientY;

const anchor=document.getElementById('anchor');
const rekt = anchor.getBoundingClientRect();
const anchorX = rekt.left + rekt.width / 2;
const anchorY = rekt.top + rekt.height / 2;

const angleDeg = angle(mouseX, mouseY,anchorX, anchorY );
console.log(angleDeg)
  
const eye = document.querySelectorAll('.eye');
eye.forEach(eye => {
    eye.style.transform = `rotate(${90+angleDeg}deg)`;
    });
});

function angle(cx, cy, ex, ey) {
const dy = ey - cy;
const dx = ex - cx;
const rad = Math.atan2(dy, dx);
const deg = rad * 180 / Math.PI;
return deg;
}

document.addEventListener('mousedown', function () {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    const elementId = isDarkMode ? 'myclosedwork' : 'bongclosedwork';
    const element = document.getElementById(elementId);
    if (element) {
        element.style.opacity = '1';
    }
});

document.addEventListener('mouseup', function () {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    const elementId = isDarkMode ? 'myclosedwork' : 'bongclosedwork';
    const element = document.getElementById(elementId);
    if (element) {
        element.style.opacity = '0';
    }
});

