<template>
<div class="content">
    <transition name="fadeup">
        <p v-show="loading" class="loading"><i class="el-icon-loading"></i></p>
    </transition>
    <transition name="fade">
        <div class="vhtml" v-if="content" v-html="content">
            <!-- <p>{{content}}</p> -->
        </div>
    </transition>
</div>
</template>

<script>
export default {
    data () {
        return {
            content: '',
            loading: true,
        }
    },
    watch: {
        '$route': function(newval) {
            this.getArtical(this.$route.meta.title);
        }
    },
    methods: {
        getArtical (name) {
            this.loading = true;
            this.content = '';
            this.$axios({
                method: 'get',
                url: '/Doc/getDoc' + this.$route.path.replace('/doc', ''),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                this.loading = false;
                if(response.status != 200) throw new Error('ajax error')
                if(response.data.data) {
                    this.content = response.data.data;
                } else {
                    this.content = "<h1>该模块没有文档<h1>";
                    this.$notify.error({
                        title: '错误',
                        message: '获取文档错误',
                        offset: 60,
                        duration: 2000
                    });
                }
            }).catch(e => {
                this.loading = false;
                console.error(e);
            })
        },
    },
    mounted () {
         this.getArtical(this.$route.meta.title);
    },
    created () {
       
    }
}
</script>
<style lang="less">

.vhtml {
    font-size: 100%; 
    // overflow-y: scroll; 
    -webkit-text-size-adjust: 100%; 
    -ms-text-size-adjust: 100%;
    text-align: left;
    color:#444; 
    font-family:Georgia, Palatino, 'Palatino Linotype', Times, 'Times New Roman', serif; 
    font-size:15px; 
    line-height:1.5em; 
    padding:1em; 
    margin:auto; 
    background:#fefefe; 
    
    h1, h2, h3, h4, h5, h6 { 
        font-weight: bold; 
    } 
    
    h1 { 
        padding: 5px 0;
        color: #000000; 
        font-size: 28px; 
    } 
    
    h2 { 
        padding-bottom: 7px;
        border-bottom: 2px solid #CCCCCC; 
        color: #000000; 
        font-size: 24px; 
    } 
    
    h3 { 
        border-bottom: 2px solid #CCCCCC; 
        font-size: 18px; 
    } 
    
    h4 { 
        font-size: 16px; 
    } 
    
    h5 { 
        font-size: 14px; 
    } 
    
    h6 { 
        color: #777777; 
        background-color: inherit; 
        font-size: 14px; 
    } 
    
    hr { 
        height: 0.2em; 
        border: 0; 
        color: #CCCCCC; 
        background-color: #CCCCCC; 
    } 
    
    p, blockquote, ul, ol, dl, li, table, pre { 
        margin: 15px 0; 
    } 
    
    p{ 
        margin:1em 0; 
    } 
    pre {  
        background-color: #F8F8F8;     
        border: 1px solid #CCCCCC; 
        border-radius: 3px; 
        overflow: auto; 
        padding: 5px; 
    } 
    pre code { 
        background-color: #F8F8F8; 
        border: none;     
        padding: 0; 
    } 
    code { 
        font-family: Consolas, Monaco, Andale Mono, monospace; 
        background-color:#F8F8F8; 
        border: 1px solid #CCCCCC; 
        border-radius: 3px; 
        padding: 0 0.2em; 
        line-height: 1; 
    } 
    pre > code { 
        border: 0; 
        margin: 0; 
        padding: 0; 
    } 
    
    
    a{ color: #0645ad; text-decoration:none;} 
    a:visited{ color: #0b0080; } 
    a:hover{ color: #06e; } 
    a:active{ color:#faa700; } 
    a:focus{ outline: thin dotted; } 
    a:hover, a:active{ outline: 0; } 
    
    ::-moz-selection{background:rgba(255,255,0,0.3);color:#000} 
    ::selection{background:rgba(255,255,0,0.3);color:#000} 
    
    a::-moz-selection{background:rgba(255,255,0,0.3);color:#0645ad} 
    a::selection{background:rgba(255,255,0,0.3);color:#0645ad} 
    
    blockquote{ 
        color:#666666; 
        margin:0; 
        padding-left: 3em; 
        border-left: 0.5em #EEE solid; 
    } 
    
    ul, ol { margin: 1em 0; padding: 0 0 0 2em; } 
    li p:last-child { margin:0 } 
    dd { margin: 0 0 0 2em; } 
    
    img { border: 0; -ms-interpolation-mode: bicubic; vertical-align: middle; max-width:100%;} 
    
    table {
    margin: 10px 0 15px 0;
    border-collapse: collapse;
    }
    td,th {	
    border: 1px solid #ddd;
    padding: 3px 10px;
    }
    th {
    padding: 5px 10px;	
    }
    
    @media only screen and (min-width: 480px) { 
        body{font-size:14px;} 
    } 
    
    @media only screen and (min-width: 768px) { 
        body{font-size:16px;} 
    }
}
</style>


<style lang='less' scoped>
.content {
    width: 100%;
}
.loading {
    margin: 0;
    overflow: hidden;
    height: 50px;
    i {
        font-size: 30px;
    }
}
.fadeup-leave-active {
  transition: all .6s;
}
.fadeup-enter-active {
    transition: all 0s;
}
.fadeup-enter, .fadeup-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  height: 0;
}
.fade-enter-active {
    transition: all 1.5s;
}
.fade-leave-active {
    transition: all 0s;
}
.fade-enter, .fade-leave-to {
    opacity: 0
}
</style>
