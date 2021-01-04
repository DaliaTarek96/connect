var upperHeaderHeight;
window.addEventListener('load', start);
// to make fixes navbar
window.onresize = () => {
    upperHeaderHeight = $('#upperHeader').height();
    UserSlider();
};
let scrollValue = $(window).scrollTop();
window.onscroll = () => {
    scrollValue = $(window).scrollTop();
    if (scrollValue >= upperHeaderHeight) {
        $('#mainNav').css({
            'z-index': 10, position: 'fixed', 'background-color': 'white',
            'box-shadow': ' 0 4px 2px -2px gray', top: 0, 'padding-bottom': '8px'
        });
    } else {
        $('#mainNav').css({ position: 'static', 'box-shadow': 'none', 'padding-bottom': '0' });
    }
    backToTop();
};

function start() {
    backToTop();
    $('.back-to-top').click(()=>{
        $('html,body').animate({scrollTop:0},700);
    });
    mainNavBar();// add items to main nav bar
    ImagesInBrand(); 
    $('.third').remove(); 
    UserSlider();
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    upperHeaderHeight = $('#upperHeader').height();
}


function backToTop(){
    console.log(scrollValue)
     // back to top 
     if(scrollValue >300){
        $('.back-to-top').fadeIn('slow');
    }else{
        $('.back-to-top').fadeOut('slow');
    }
}

function UserSlider(){
    let width = window.innerWidth;
    let users=[{img:'1',name:'Martine Cloud'},{img:'2',name:'Sem Rubick'}]
    if(width >767){
        $('.third').remove();
    } else{
        if($('.third').length==0){
           users.forEach(user=>{
            $('.carousel-inner').append(' <div class="carousel-item  third"  ><div >\
            <img src="./Images/users/'+user.img+'.jpg" alt="user'+user.img+'">\
            <p>Where does one find a real photographer nowadays? Can deliver a top \
                photographer for your party or wedding and our photo studio is always at your pictures.</p>\
            <h5>'+user.name+'</h5> <span>Investor</span> </div></div>');
           })
        }
    }
}

function mainNavBar() {
    let navItems = [{name:'Homepage',to:'#intro'}, {name:'Insights',to:'#about'}, {name:'VC',to:'#services'},
     {name:'PE',to:'#team'}];
    navItems.forEach((item) => {
        $('.navbar-nav').append('<li class="menu-item"><a class="nav-link"  href="'+item.to+'">' + item.name + '</a></li>');
        $('.footerNav').append('<li><a  href="'+item.to+'">' + item.name + '</a></li>');
    });
    $('.navbar-nav').append('<span class="menu_item_line" "></span>');
}


function ImagesInBrand() {
    let imgs = [{ name: 'partners_01', width: '198' }, { name: 'partners_02', width: '93.5' },
    { name: 'partners_03', width: '146' }, { name: 'partners_04', width: '191' }];
    imgs.forEach((img) => {
        $('#Images').append('<div class="col-12 col-md-6 col-lg-3"><img src="./Images/Partners/' + img.name + '.png" alt=' + img.name + ' width=' + img.width + '> </div>');
    });
}

