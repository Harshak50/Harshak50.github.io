$('.navbar a').on('click',function(e){
    if(this.hash !== ''){
        e.preventDefault();
        const hash = this.hash;
    
    
        $('html').animate({
          scrollTop: $(hash).offset().top
        },
        800
        );
    }
    });
    
    
    $('.scroll a').on('click',function(e){
      if(this.hash !== ''){
          e.preventDefault();
          const hash = this.hash;
      
      
          $('html').animate({
            scrollTop: $(hash).offset().top
          },
          800
          );
      }
      });
    