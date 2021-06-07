import React from 'react'

const Mint = () => {
    return (
        <div>
            <div class="wrapper">
                <header>
        <div class="logo">
            <h1>Faux.Finance</h1>
            
        </div>
        <nav class="option">
            <ul>
                <li><a href="#" >MINT</a></li>
                <li><a href="#">TRADE</a></li>
                <li><a href="#">GOVERNANCE</a></li>
               
                <li><a class="btn" href="#">CONNECT WALLET</a></li>
            </ul>
        </nav>
    </header>

    <div class="content">
        
        <div class="img">
            <div class="social-icons">
               
           
            </div>
            <img class="email-icon" src="images/email-icon.png" alt="" />
        </div>
    </div>

<div class="wave">
    <img src="images/wave.svg" alt="" />
</div>
<div class="timeline">
         
    <div>
        <h2 style="padding-left: 300px; border-bottom: 4px solid #1eb2ff;">
            Mint
        </h2>
    </div>
    <div class='tweetbox'>
        <form style="padding: 10px 10px 10px 10px;">
            <div class='tweetinput'>
                <input  class = "hello" id = "dweet" placeholder="Collatoral" type="text" style="min-width: 650px; padding: 10px 10px 10px 10px; border: none; font-size: 20px;" />
            </div>
            <div class='tweetinput1'>
                <input  class = "hello1" id = "dweet" placeholder="Minted" type="text" style="min-width: 650px; padding: 10px 10px 10px 10px; border: none; font-size: 20px;" />
            </div>
            <div class='tweetinput2'>
                <input  class = "hello2" id = "dweet" placeholder="Collateral Ratio" type="text" style="min-width: 650px; padding: 10px 10px 10px 10px; border: none; font-size: 20px;" />
            </div>
           
           
          <input type="button" class="twtbtn" onClick="connect()" style="margin-left:240px" value="CONNECT WALLET " />  
        </form>
    </div>
</div>
</div>
</div>
    )
}

export default Mint
