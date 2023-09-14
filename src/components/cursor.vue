<template>
    <div class="cursor-container">
        <div class="cursor" id="cursor"></div>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue';

    onMounted(() => {
        const cursor = document.getElementById('cursor');

        document.addEventListener("mousemove", (event) => {
            const mousePosX = event.clientX;
            const mousePosY = event.clientY;
            
        cursor.animate({
            left: mousePosX +'px',
            top: mousePosY + 'px'
        }, {duration: 300, fill: "forwards"});
        });

        const allButton = document.getElementsByTagName('button');
        const allHyperLink = document.getElementsByTagName('a');

        for (var i = 0 ; i < allButton.length ; i++){
            allButton[i].addEventListener("mouseover", function(){
                cursor.style.transform = "scale(.3)";
                cursor.style.backgroundColor = "white";
            });
        }

        for (var i = 0 ; i < allButton.length ; i++){
            allButton[i].addEventListener("mouseout", function(){
                cursor.style.transform = "scale(1)";
                cursor.style.backgroundColor = "transparent";
            });
        }

        for (var i = 0 ; i < allHyperLink.length ; i++){
            allHyperLink[i].addEventListener("mouseover", function(){
                cursor.style.transform = "scale(.3)";
                cursor.style.backgroundColor = "white";
            })
        }

        for (var i = 1 ; i < allHyperLink.length ; i++){
            allHyperLink[i].addEventListener("mouseout", function(){
                cursor.style.transform = "scale(1)";
                cursor.style.backgroundColor = "transparent";
            })
        }
    });
</script>