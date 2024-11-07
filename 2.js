document.addEventListener('DOMContentLoaded', function() {
    const mapImage = document.getElementById('map-image');
    let isDragging = false;
    let startX, startY, startLeft, startTop;
    let scale = 1;

    const handleMouseDown = (event) => {
        isDragging = true;
        startX = event.clientX;
        startY = event.clientY;
        startLeft = parseFloat(mapImage.style.left || '0');
        startTop = parseFloat(mapImage.style.top || '0');
    };

    const handleMouseMove = (event) => {
        if (isDragging) {
            const dx = event.clientX - startX;
            const dy = event.clientY - startY;
            mapImage.style.left = `${startLeft + dx}px`;
            mapImage.style.top = `${startTop + dy}px`;
        }
    };

    const handleMouseUp = () => {
        isDragging = false;
    };

    const handleWheel = (event) => {
        event.preventDefault();
        const delta = event.deltaY < 0 ? 1 : -1;
        scale += delta * 0.1;
        scale = Math.max(0.5, Math.min(1.5, scale)); // Limit the scale to a reasonable range
        mapImage.style.transform = `translate(-50%, -50%) scale(${scale})`;
    };

    mapImage.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    mapImage.addEventListener('wheel', handleWheel);

    const areas = document.querySelectorAll('area');
    areas.forEach(area => {
        area.addEventListener('click', function(event) {
            event.preventDefault();
            const message = this.getAttribute('data-message');
            const image = this.getAttribute('data-image');
            if (message) {
                const messageBox = document.getElementById('message-box');
                messageBox.textContent = message;
                messageBox.style.display = 'block';
                setTimeout(() => {
                    messageBox.style.display = 'none';
                }, 1000); // Hide message box after 1 second

                setTimeout(() => {
                    showImage(image, 1000); // Show image for 1 second
                }, 1000); // Show image after message box is hidden
            }
        });
    });

    const qingdaoArea = document.querySelector('area[alt="Qingdao Citizen Fitness Center"]');
    qingdaoArea.addEventListener('click', function(event) {
        event.preventDefault();
        showLyricBox();
    });


    function showLyricBox() {
        const lyricBox = document.getElementById('lyric-box');
        lyricBox.style.display = 'block';
        lyricBox.innerHTML = '<p>请问“暖手的是热茶，暖心的是你一句话”是哪首歌曲中的歌词？</p><button id="buttonA">手心的蔷薇</button><button id="buttonB">将故事写成我们</button>';
        document.getElementById('buttonA').addEventListener('click', function() {
            hideLyricBox();
            showTrapBox();
        });
        document.getElementById('buttonB').addEventListener('click', function() {
            hideLyricBox();
            showRewardBox();
        });
    }


    function hideLyricBox() {
        const lyricBox = document.getElementById('lyric-box');
        lyricBox.style.display = 'none';
    }

    function showTrapBox() {
        const trapBox = document.getElementById('trap-box');
        trapBox.textContent = "啊！掉进陷阱了！";
        trapBox.style.display = 'block';
        setTimeout(() => {
            trapBox.style.display = 'none';
        }, 1000);
    }

    function showRewardBox() {
        const rewardBox = document.getElementById('reward-box');
        rewardBox.textContent = "恭喜你！获得了一个宝箱";
        rewardBox.style.display = 'block';
        setTimeout(() => {
            rewardBox.style.display = 'none';
            showVideo('96de590d7ed68b8aa8b54e29a8ea3557.mp4'); // 视频在宝箱消息消失后立即显示
        }, 1000); // 宝箱消息停留两秒
    }

    function showVideo(src) {
        const videoBox = document.getElementById('video-box');
        videoBox.innerHTML = `
            <video id="videoPlayer" src="${src}" controls></video>
            <button id="closeVideoButton" class="close-button">X</button>
        `;
        videoBox.style.display = 'block';
        const closeButton = document.getElementById('closeVideoButton');
        closeButton.addEventListener('click', function() {
            videoBox.style.display = 'none';
            videoBox.innerHTML = ''; // Remove video element and close button
        });
    }

    function showImage(src, duration) {
        const imageBox = document.getElementById('image-box');
        imageBox.style.backgroundImage = `url(${src})`;
        imageBox.style.display = 'block';
        setTimeout(() => {
            imageBox.style.display = 'none';
        }, duration);
    }

  
const shanxiArea = document.querySelector('area[alt="Shanxi Sports Center"]');
shanxiArea.addEventListener('click', function(event) {
    event.preventDefault();
    showShanxiBox();
});

function showShanxiBox() {
    const shanxiBox = document.getElementById('shanxi-box');
    shanxiBox.style.display = 'block';
    shanxiBox.innerHTML = '<p>请问2024JJ20太原场的T恤限定是什么颜色？</p><button id="shanxiButtonA">奶紫色</button><button id="shanxiButtonB">米白色</button>';
    document.getElementById('shanxiButtonA').addEventListener('click', function() {
        hideShanxiBox();
        showTrapBox();
    });
    document.getElementById('shanxiButtonB').addEventListener('click', function() {
        hideShanxiBox();
        showVideo('271d5246508887eb8fa48d16319e9c2f.mp4'); // 显示Shanxi Sports Center的视频
    });
}
    function hideShanxiBox() {
        const shanxiBox = document.getElementById('shanxi-box');
        shanxiBox.style.display = 'none';
    }

    const lanzhouArea = document.querySelector('area[alt="Lanzhou Olympic Sports Center"]');
    lanzhouArea.addEventListener('click', function(event) {
        event.preventDefault();
        showLanzhouBox();
    });

    function showLanzhouBox() {
        const lanzhouBox = document.getElementById('lanzhou-box'); // 修正ID
        lanzhouBox.style.display = 'block';
        lanzhouBox.innerHTML = '<p>请问你在兰州喝了什么？</p><button id="lanzhouButtonA">黄瓜浆水</button><button id="lanzhouButtonB">可口可乐</button>';
        document.getElementById('lanzhouButtonA').addEventListener('click', function() {
            hideLanzhouBox();
            showVideo('588dd5c0bbad6efc4a555aeb30acbb43_raw.mp4'); // 显示兰州的视频
        });
        document.getElementById('lanzhouButtonB').addEventListener('click', function() {
            hideLanzhouBox();
            showTrapBox();
        });
    }

    function hideLanzhouBox() {
        const lanzhouBox = document.getElementById('lanzhou-box'); // 修正ID
        lanzhouBox.style.display = 'none';
    }



    const chongqingArea = document.querySelector('area[alt="Chongqing Olympic Sports Center"]');
    chongqingArea.addEventListener('click', function(event) {
        event.preventDefault();
        showChongqingBox();
    });

    function showChongqingBox() {
        const chongqingBox = document.getElementById('chongqing-box');
        chongqingBox.style.display = 'block';
        chongqingBox.innerHTML = '<p>请问2024JJ20重庆场尾场的嘉宾是谁？</p><button id="chongqingButtonA">陶喆</button><button id="chongqingButtonB">李健</button>';
        document.getElementById('chongqingButtonA').addEventListener('click', function() {
            hideChongqingBox();
            showVideo('8218d1772b27898caf23760b74337b4d.mp4'); // 显示重庆的视频
        });
        document.getElementById('chongqingButtonB').addEventListener('click', function() {
            hideChongqingBox();
            showTrapBox();
        });
    }

    function hideChongqingBox() {
        const chongqingBox = document.getElementById('chongqing-box');
        chongqingBox.style.display = 'none';
    }

});



