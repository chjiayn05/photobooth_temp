function goMenu(){
    window.location.href="menu.html";
}
function downloadAndOpen() {
            const targetLink = "https://www.canva.com/design/DAG8O9_Dytg/3vOaBZpHr2oqBQ0V6UnAtQ/view?utm_content=DAG8O9_Dytg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h578cef5baa";
            
            const images = [
                'assets/demo_photos/demo1.jpg',
                'assets/demo_photos/demo2.jpg',
                'assets/demo_photos/demo3.jpg',
                'assets/demo_photos/demo4.jpg'
            ];

            window.open(targetLink, '_blank');

            let index = 0;

            const downloadTimer = setInterval(() => {
                if (index >= images.length) {
                    clearInterval(downloadTimer);
                    return;
                }

                const link = document.createElement('a');
                link.href = images[index];
                link.download = `demo_${index + 1}.png`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                index++; 
            }, 500);
        }