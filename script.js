            document.addEventListener('DOMContentLoaded', function() {
            const riotMenuTrigger = document.getElementById('riot-menu-trigger');
            const riotMegaMenu = document.getElementById('riot-mega-menu');
            const closeRiotMenu = document.getElementById('close-riot-menu');
            const mainNav = document.getElementById('main-nav');
            const searchBtn = document.getElementById('search-btn');
            const searchInput = document.querySelector('.search-input');

             // Thêm: Lấy các element của Play Now Modal
            const playNowTrigger = document.getElementById('play-now-trigger');
            const playNowOverlay = document.getElementById('play-now-overlay');
            const closePlayNowModal = document.getElementById('close-play-now-modal');

             // Mở Mega Menu
            riotMenuTrigger.addEventListener('click', function(event) {
                event.stopPropagation();
                riotMegaMenu.classList.add('active');
            });

            // Đóng Mega Menu
            function closeMegaMenu() {
                riotMegaMenu.classList.remove('active');
            }

            closeRiotMenu.addEventListener('click', closeMegaMenu);
            riotMegaMenu.addEventListener('click', function(event) {
                if (event.target === riotMegaMenu) {
                    closeMegaMenu();
                }
            });

    const promoData = {
        "lol": {
            img: "./Trang chu/img/lol-header.png",
        },
        "valorant": {
            img: "./Trang chu/img/vlr.png",
        },
        "tft": {
            img: "./Trang chu/img/tft.png",
        },
        "arcane": {
            img: "./Trang chu/img/arcane.png",
        },
        "wr": {
            img: "./Trang chu/img/wild-rift.png",
        },
        "lor": {
            img: "./Trang chu/img/runeterra.png",
        },
        "ruinedking": {
            img: "./Trang chu/img/ruined-king.png",
        },
        "convergence": {
            img: "./Trang chu/img/convergence.png",
        },
        "songofnunu": {
            img: "./Trang chu/img/songofnunu.png",
        },
        "riotforge": {
            img: "./Trang chu/img/riot-forge.png",
        },
        "lolesports": {
            img: "./Trang chu/img/lol-esport.png",
        },
        "valesports": {
            img: "./Trang chu/img/vlr-esport.png",
        },
        "universe": {
            img: "./Trang chu/img/vutru.png",
        },
        "music": {
            img: "./Trang chu/img/riot-music.png",
        }, 
        "riotgames": {
            img: "./Trang chu/img/riotgames.png",
        },
        "riotsupport": {
            img: "./Trang chu/img/riot-sp.png",
        },        
        // Mặc định
        "default": {
            img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar_live/ef36308f397ba5305d706f3ab06df18f9277737f-660x428.jpg??&format=pjpg&quality=85",
            desc: "Khám phá vũ trụ Riot Games với vô vàn trò chơi và trải nghiệm hấp dẫn."
        }
        
    };

    // Lấy các element cần thiết
    const menuLeftPanel = document.querySelector('.menu-left-panel'); 
    const promoDefault = document.getElementById('promo-default');    
    const promoHover = document.getElementById('promo-hover');       
    const promoImg = document.getElementById('promo-card-img');
    const promoDesc = document.getElementById('promo-card-desc');
    const menuLinks = document.querySelectorAll('.menu-link-hover');

   menuLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const key = this.getAttribute('data-promo');
            const data = promoData[key] || promoData['default'];

            // Cập nhật nội dung ảnh to
            promoImg.src = data.img;
            promoDesc.textContent = data.desc;

            // Chuyển đổi trạng thái hiển thị
            promoDefault.style.display = 'none'; // Ẩn 2 ảnh nhỏ
            promoHover.style.display = 'block';  // Hiện 1 ảnh to
        });
    });

    // 4. Xử lý khi chuột RỜI KHỎI khu vực danh sách link (Trở về mặc định)
    menuLeftPanel.addEventListener('mouseleave', function() {
        promoHover.style.display = 'none';   // Ẩn ảnh to
        promoDefault.style.display = 'flex'; // Hiện lại 2 ảnh nhỏ (dùng flex như CSS)
    });



    // Thêm logic đóng menu khi click vào vùng đen (backdrop)
    const backdrop = document.querySelector('.riot-menu-backdrop');
    if(backdrop) {
        backdrop.addEventListener('click', function() {
             document.getElementById('riot-mega-menu').classList.remove('active');
        });
    }

            // Mở/Đóng thanh tìm kiếm
            searchBtn.addEventListener('click', function(event) {
                event.stopPropagation();
                mainNav.classList.toggle('search-active');
                if (mainNav.classList.contains('search-active')) {
                    searchInput.focus();
                }
            });

            // Đóng thanh tìm kiếm khi click ra ngoài
            document.addEventListener('click', function(event) {
                const isClickInsideNav = mainNav.contains(event.target);
                if (!isClickInsideNav && mainNav.classList.contains('search-active')) {
                    mainNav.classList.remove('search-active');
                }
            });

            // Thêm: Logic cho Play Now Modal
             // Mở Play Now Modal
            playNowTrigger.addEventListener('click', function(event) {
                event.preventDefault(); // Ngăn thẻ <a> chuyển trang
                playNowOverlay.classList.add('active');
            });

            // Đóng Play Now Modal
            function closePlayNowModalFunc() {
                playNowOverlay.classList.remove('active');
            }

            closePlayNowModal.addEventListener('click', closePlayNowModalFunc);
            playNowOverlay.addEventListener('click', function(event) {
                if (event.target === playNowOverlay) {
                    closePlayNowModalFunc();
                }
            });
                // --- LOGIC MOBILE MENU (HAMBURGER) ---
            const hamburgerBtn = document.getElementById('hamburger-btn');
            const mobileMenuOverlay = document.getElementById('mobile-menu');
            const closeMobileBtn = document.getElementById('close-mobile-menu');
            const mobileBackdrop = document.getElementById('mobile-backdrop');

            // Hàm mở menu
            function openMobileMenu() {
                mobileMenuOverlay.classList.add('active');
                document.body.style.overflow = 'hidden'; // Khóa cuộn trang web lại
            }

            // Hàm đóng menu
            function closeMobileMenu() {
                mobileMenuOverlay.classList.remove('active');
                document.body.style.overflow = ''; // Mở khóa cuộn
            }

            // Gán sự kiện
            if (hamburgerBtn) {
                hamburgerBtn.addEventListener('click', openMobileMenu);
            }

            if (closeMobileBtn) {
                closeMobileBtn.addEventListener('click', closeMobileMenu);
            }

            if (mobileBackdrop) {
                mobileBackdrop.addEventListener('click', closeMobileMenu);
            }
            if (hamburgerBtn) hamburgerBtn.addEventListener('click', () => toggleMobileMenu(true));
            if (closeMobileBtn) closeMobileBtn.addEventListener('click', () => toggleMobileMenu(false));

            // 2. Logic Dropdown (Accordion) cho mục "Tin Tức"
            const newsTrigger = document.getElementById('news-dropdown-trigger');
            const mobileDropdown = document.querySelector('.mobile-dropdown');

            if (newsTrigger && mobileDropdown) {
                newsTrigger.addEventListener('click', function() {
                    // Toggle class 'open' vào thẻ cha li
                    // Class 'open' này sẽ kích hoạt CSS max-height và transform rotate
                    mobileDropdown.classList.toggle('open');
                });
            }
        });
        
// --- LOGIC CHUYỂN ĐỔI TƯỚNG (CHAMPION SWITCHER) ---

    // 1. Dữ liệu các tướng tương ứng với từng hệ (Bạn có thể thay link ảnh khác nếu muốn)
    const championsData = {
        "assassin": {
            name: "AKALI",
            title: "Sát Thủ Đơn Độc",
            img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/befd42ad6d2564159a441d08cfc3bf511532eb74-1628x1628.png?accountingTag=league_of_legends_website?auto=format&fit=fill&q=80&w=920",
            desc: "Sát thủ là những kẻ săn mồi đơn độc, có khả năng tiếp cận và tiêu diệt mục tiêu chủ lực nhanh chóng."
        },
        "fighter": {
            name: "YASUO",
            title: "Kẻ Bất Dung Thứ",
            // Lưu ý: Đây là link ví dụ, bạn nên tìm ảnh Yasuo PNG trong suốt đẹp hơn để thay thế
            img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/70c26e49de8a2c79ac3de144772d2debd195edff-1628x1628.png?accountingTag=league_of_legends_website?auto=format&fit=fill&q=80&w=920", 
            desc: "Đấu sĩ là những chiến binh cận chiến bền bỉ, vừa có khả năng gây sát thương lớn vừa chịu đòn tốt."
        },
        "mage": {
            name: "LUX",
            title: "Tiểu Thư Ánh Sáng",
            img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ff6c8c57411e5c7e0551b02334fccedc78866143-1628x1628.png?accountingTag=league_of_legends_website?auto=format&fit=fill&q=80&w=920",
            desc: "Pháp sư sử dụng phép thuật để kiểm soát chiến trường, dồn sát thương diện rộng hoặc khống chế kẻ địch."
        },
        "marksman": {
            name: "JINX",
            title: "Khẩu Pháo Nổi Loạn",
            img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/f136500bd46f823d37515a72b867425d3a0b3e54-1628x1628.png?accountingTag=league_of_legends_website?auto=format&fit=fill&q=80&w=920",
            desc: "Xạ thủ là những tướng đánh xa gây sát thương vật lý liên tục, là nguồn sát thương chính về cuối trận."
        },
        "support": {
            name: "THRESH",
            title: "Cai Ngục Xiềng Xích",
            img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/dbdded937cd214bb2a1189697a9e4f49f8c04505-1628x1628.png?accountingTag=league_of_legends_website?auto=format&fit=fill&q=80&w=920",
            desc: "Hỗ trợ là người bảo kê đồng đội, cung cấp tầm nhìn và các hiệu ứng có lợi để giúp cả đội chiến thắng."
        },
        "tank": {
            name: "LEONA",
            title: "Bình Minh Rực Rỡ",
            img: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/95daf6dd2b28f03d5ba2ea1fabbabc3bc3ff6e6e-1628x1628.png?accountingTag=league_of_legends_website?auto=format&fit=fill&q=80&w=920",
            desc: "Đỡ đòn là bức tường thành vững chắc, luôn đi đầu trong giao tranh để che chắn cho đồng đội."
        }
    };

    // 2. Lấy các phần tử DOM cần thao tác
    const roleItems = document.querySelectorAll('.role-item');
    const championImg = document.querySelector('.champion-img');
    const championName = document.querySelector('.champion-name-tag .name');
    const championTitle = document.querySelector('.champion-name-tag .role-name');
    // Nếu bạn muốn đổi cả mô tả text bên trái
    const championDesc = document.querySelector('.champion-content .desc'); 

    // 3. Hàm xử lý khi click
    roleItems.forEach(item => {
        item.addEventListener('click', function() {
            // 3.1. Xóa class active ở tất cả các item cũ
            roleItems.forEach(i => i.classList.remove('active'));
            
            // 3.2. Thêm class active cho item vừa click
            this.classList.add('active');

            // 3.3. Lấy data-role từ thẻ HTML
            const role = this.getAttribute('data-role');
            const data = championsData[role];

            if (data) {
                // 3.4. Hiệu ứng Fade Out (Mờ đi)
                championImg.style.opacity = 0;
                championImg.style.transform = "scale(0.9) translateX(20px)"; // Thu nhỏ nhẹ và dịch sang phải

                // Đợi 200ms cho hiệu ứng mờ đi hoàn tất rồi mới đổi ảnh
                setTimeout(() => {
                    // Cập nhật nội dung
                    championImg.src = data.img;
                    championName.textContent = data.name;
                    championTitle.textContent = data.title;
                    if(championDesc) championDesc.textContent = data.desc;

                    // Hiệu ứng Fade In (Hiện lại)
                    championImg.onload = () => { // Chỉ hiện khi ảnh đã tải xong
                        championImg.style.opacity = 1;
                        championImg.style.transform = "scale(1.1)"; // Trở về trạng thái phóng to (style cũ)
                    };
                }, 200);
            }
        });
    });
    // --- LOGIC CHUYỂN ĐỔI GAME MODES ---

    // 1. Dữ liệu các Map (Background, Video, Text)
    // Lưu ý: Tôi dùng link video/ảnh thật của Riot để bạn test
    const gameModesData = {
        "sr": {
            bg: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/0eb5bc3bbb7794eceea3a5e7948906e1cbcd027f-5120x1810.png?accountingTag=league_of_legends_website?auto=format&fit=fill&q=80&w=1728",
            video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/bbc27473157462adacf0de441a8796268eb2d0ac.mp4?accountingTag=league_of_legends_website",
            title: "CHẾ ĐỘ CHƠI PHỔ BIẾN NHẤT",
            desc: "Dọn đường, tham gia giao tranh tổng, phá hủy Nhà Chính của địch trước khi Nhà Chính của bạn bị phá hủy."
        },
        "aram": {
            bg: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/de076d7f25b6472f2a6f72a5795fc182d9413962-5120x1810.png?accountingTag=league_of_legends_website?auto=format&fit=fill&q=80&w=1728",
            video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/0a9b9f8dacb54086c58c1af8aa880d7cf6d7fea6.mp4?accountingTag=league_of_legends_website",
            title: "TẤT CẢ NGẪU NHIÊN, CHỈ ĐI ĐƯỜNG GIỮA",
            desc: "Chiến đấu trên một cây cầu băng giá với những vị tướng ngẫu nhiên để xông thẳng tới Nhà Chính của địch trong chế độ 5v5 vui nhộn và hỗn loạn."
        },
        "tft": {
            bg: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/973e16ef8399297ebf1856cde64444d9a18631a0-5120x1810.png?accountingTag=league_of_legends_website?auto=format&fit=fill&q=80&w=1728", // Bạn có thể tìm ảnh nền TFT đẹp hơn thay vào đây
            video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/e5791dbc0787a96e83b82df20d44375f09f4d861.mp4?accountingTag=league_of_legends_website",
            title: "MỘT TRẬN HỖN CHIẾN ĐỂ GIÀNH NGÔI VỊ BÁ CHỦ",
            desc: "Tập hợp những vị tướng để chiến đấu cho bạn. Vượt qua 7 đối thủ khác để trở thành người sống sót cuối cùng."
        }
    };

    // 2. Lấy Elements
    const modeItems = document.querySelectorAll('.mode-item');
    const gamemodesSection = document.getElementById('gamemodes-section');
    const modeVideo = document.getElementById('mode-video');
    const modeTitle = document.getElementById('mode-title');
    const modeDesc = document.getElementById('mode-desc');

    // 3. Xử lý sự kiện click
    modeItems.forEach(item => {
        item.addEventListener('click', function() {
            // Xóa active cũ
            modeItems.forEach(i => i.classList.remove('active'));
            // Active cái mới
            this.classList.add('active');

            // Lấy key từ data-mode (sr, aram, tft)
            const modeKey = this.getAttribute('data-mode');
            const data = gameModesData[modeKey];

            if (data) {
                // Đổi Background Section
                gamemodesSection.style.backgroundImage = `url('${data.bg}')`;

                // Đổi Video
                // Tạo hiệu ứng fade nhẹ cho video
                modeVideo.style.opacity = 0;
                setTimeout(() => {
                    modeVideo.src = data.video;
                    modeVideo.play(); // Đảm bảo video tự chạy lại
                    modeVideo.style.opacity = 1;
                }, 300);

                // Đổi Text
                modeTitle.textContent = data.title;
                modeDesc.textContent = data.desc;
            }
        });
    });