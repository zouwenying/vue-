<template>
    <div id="pdfDom">
        <el-button @click="getPdf()">导出PDF文件</el-button>
         <el-button @click="printOut('这个一个图片')">导出图片</el-button>
    </div>
</template>
<script>
import html2canvas from 'html2canvas'
export default {
    data(){
        return {    
            htmlTitle: '页面导出PDF文件名'
        }
    },
    methods:{
        dataURLToBlob(dataurl) {//ie 图片转格式
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
         bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
         u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {type: mime})
       },
    downloadResult(name) {
        let canvasID = document.body
        let a = document.createElement('a');
        html2canvas(canvasID).then(canvas => {
         let dom = document.body.appendChild(canvas);
         dom.style.display = "none";
         a.style.display = "none";
         document.body.removeChild(dom);
         let blob = this.dataURLToBlob(dom.toDataURL("image/png"));
         a.setAttribute("href", URL.createObjectURL(blob));
         a.setAttribute("download", name + ".png")
         document.body.appendChild(a);
         a.click();
         URL.revokeObjectURL(blob);
         document.body.removeChild(a);
        });
       },
     printOut(name) {
     // 个人观察只是截取可见范围以及以下的区域，所以先将滚动条置顶
       document.body.scrollTop = 0; // IE的
       document.documentElement.scrollTop = 0; // 其他
       this.downloadResult(name)
    }
    }

}
</script>
<style lang="scss" scoped>

</style>