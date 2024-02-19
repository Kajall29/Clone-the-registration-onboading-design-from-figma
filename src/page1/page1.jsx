import React from 'react';
import buildingImage from '../assets/building.jpg';
import { Link } from 'react-router-dom';

function Sections() {
  return (
    <div className="font-sans">
     
      <section className="section1 w-1/2 h-screen float-left">
        <div className="blue-background relative h-full overflow-hidden">
          <img src={buildingImage} alt="Building Background" className="w-full" />
          <div className="blue-overlay absolute top-0 left-0 w-full h-full bg-blue-500 opacity-90"></div>
          <div className="random-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <p className="oasis text-4xl font-bold mb-10 text-left">Oasis.</p>
            <p className="text text-left">The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software.</p>
            <p className="text-18 text-left mt-7">Vincent Obi ✅</p>
          </div>
        </div>
      </section>
      [11:50, 19/02/2024] Harsh:   <section className="section2 w-1/2 h-screen float-left overflow-hidden">
        <div className="container h-full flex flex-col justify-center items-start px-10">
          <div className="already-text absolute top-0 right-0 pt-12 pr-12 text-black-500">Already have an account? <span className="font-bold text-blue-400"><Link to="/page2">Sign In </Link></span></div>
          <div className="join-text">
            <h2 className="font-bold text-3xl">Join us!</h2>
            <br />
            <p className="journey text-gray-600">To begin this journey, tell us what type of account you’d be opening</p>
            <br />
          </div>
          <div className="account-options flex flex-col gap-6">
            <div className="individual-rectangle bg-blue-50 border border-blue-500 rounded-lg flex items-center p-6">
              <div className="icon">
                {/* Your image goes here */}
                 <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAADbCAMAAABOUB36AAAAkFBMVEVAU/r///8+Ufpaa/s2S/o6Tvo8UPo1SvoySPr6+//g4/4xR/ouRfr9/f/4+f9BVfrt7/+Zovza3f6krP3z9f8nQPq2vP3x8v/HzP1QYfrQ1P5UZfqLlfxIW/qDjfthb/q+xP3k5/55hfu5v/2fp/zV2f5IWfpodvtxfvuRm/xqefvFyv6psPyNl/x+ivvi5f7pBppuAAAIxklEQVR4nN2diXrqIBCFkxGSuEfrlrg1WutS277/2129Nq0xQCCBCJwXkP/LOAxwGBy3ZoWD9XoQ1v2rTs2/N4uQ56Hoo+afrRnziDznIg99dmv93VoxhycfnP8Cfz+s85frxNz2sfMr3N/W+NP1YYZfHXDuBONNfZmoNszhHDsPwtGurl+vC/MF5yivmeitpp+vBzM5IchTXgIX7b9rGUAtmB8RIkHeAve1jhHUgDk6jomfMs1Ei6n6MajHbO2pn/ImtFY/hSrHnJByz0Pg4onqUSjGnB7IuechcNFJceCqxYwbBQH7G7iNWOlAVGI23zqFAZvK6wyaCoeiEDPZ+BwB+xu4/qGlbizqMD88zoBNhbG6VagqzNFC5FP+fFC0GikajiLM1ponw+Y5VU2hajCJhTqPsKJiXgVmuApKfMqfDxp8JQqGpAAzjvyykFeh5Uz+mKRj9ga+V4Xyugo9Ss9EsjHDfZnck9VlFSp7+0Qy5tYpmXuykl7MS8UcLXDlT3kT4JXUYl4m5m5dPsPmOH2pxbw8zOY5kBKwqbzgLK+Yl4Y5/RKv7tgCX95GrizM2btgoc4j5Mgq5uVgdo9QcbIky4OFnMCVgvl9aksO2FQQ7KWsQmVgTuRMlmRhOEsYYnXM0VF27skKfAkbuZUxd+9qKS/y+5WPlCpidl/6SnJPVp7zVvFwuxpmuJFX97AEwaHaFFoJ83WpYLIkC79XOtyugNl7q7qyFBH4g94zMFsNVZMlhTOYl98PK4056SucLMnC/UnZTFQSsym9UOcRoE3JwC2HGc+rb4WUEorK7YeVwnyB2gM2lQelptASmN+HznM+5X9B51SimBfHnNWfe7LCfXFXhihm9/ikf+WdAB1FV6GCmMP5MzJsnlPUHyaGeX5/csCmwu9iq1ARzPCLZfCpV9AR2g8TwLxMls+Gu5fQFMqPeUY1Fuo88tCLdMykUc/KUkTgR4lczNdIk9yTFV5yrkK5MEeLtmYBmwrafK4MHsxdKb9ETUJrniMlDswJ0jJgU2Gf4yy0EDM81LtJIC5oFx9uF2HGeuaerHDhFFqAedRtsiTL84/sVSgTs3XSoVDnUdEtJRbmqy6FOo/Yt5TomOHqmZsE4mIW81TMVsOgT3kTpm/k0jDPZc2FzxSmFvNkzITLia+fAJ0SfswZ/RaQ7qJc9CVgjgZjIyZLsmD8SSjm85jJydhPeRMiuDJymFvPwNyTFcHY+IA52sgyFz5TgA8jFuZubUp1xxagxo6KKXILSHc93FK6w0yecmapSuBvEhLmTPQWkO5CeJbD7H2aWfewBHgxymImEpz4+gnQunWPaWShzqO0mL9ihgv9dtRlCYJVeMOseAtId/lRfMV8MWNXq7yuR0rOzMbckxWgmbO2/Fte5a2d/rPHUIf6ztz6mL1E7dwZWFbikYQGTmzDApMtwLEzsj8HeY2R4y6sj1q0uJQHcefZw1CtTnzB7C0t/3PCsnetaW2P2kvMXjE/7M61cG11csGc2h21sJze1psbS9fUN+HNz7J61n72UFSqPUt3D2yOWliG6V7QwuKoxYvfLa9Xi6O2/fqL2Rw/ezDqNG7+bWAerI1afLjbp90Gzx6OKgXbO8wksjTXwo9/+udwwdYK4X9t8Ic5sTRqg0kGc2rnbi3gaQaza2euxYdu9nxzYuWiE6WWkhTzu29h1EL/+wHTtXGDz1s/Hsq7ZwtzbXDOYX571kUtQCuH2bMv1+JDL4fpnq07s/b/rrL+YSbWrcbGCQHTjSzLtV7kkjDfLIta/42IObSrQoD+kIjZ21uVa/G+R8R07Tq4RgOXjNmy6giw06JgNhsW5VpvTrENX3KtRVGb7ZyewYzBmlwLEFMxu/Zs8EHUpWK6R2uiFh1dOubOmkVnQL+g4bpTW/YQvPWUgWlNhZCpDfKYM0sqhE7MxHTtcJUAdtmYKyuiFq0KMK3whAN+7GrxiBnaUNd6jcfWALlrqisLFp34MWbzmDbk2k6uE0sOc2T+Vgn0c5fI81fIzTdkokUOKo/5avyfE+dbgeYxw3fDoxbe8y1YCO0dTLdbpLaKAkzTrW1tQvtaAqbhhsyb5bIYs2t2hYBXhLZepA4zZpuEAlLbPRJmz+gjwDGp9TuxX5DJhyl4TyIiYpoctcSYJWO2zN2vhYjY9Z3cy8tcu8WPTZgP09yoJccsBTM0td8DBOSWgmTM7snQqP21XHJhGmvIRJSu9hRMQ+0WGVsFB6ahhsw/yyUn5ouRJiFfrAfmpUIw8ZQBMO1FGBqmkYbMO8slJ6aR1jaf+iA9FdNEQ+ad5ZIX0zVvqwSWVBg6pnlR6w+oMHTMnWkVAjBeI6VjGteTxVvTH9Ng9HU3zW7xaKvgxBwadgTYYfTpZ2A2zTK/exHjDTXWYwRmRS0rZpmYM5MuGoHHeiyEhdk0aYPvwXIpgGnUwTXhiJoXMzboCLDNfJmJiWmQSchrMB+eZz/i82lM1KJPJggb0xyTUN4KJIDpmtICHQI2RwGmKXYL/FUJc2bInxMVPCRWgJmY0dcV5kklTEMMmXnLpSDmhxEVQof4co8A5siE8h28okc4C19sNCFqC2O2GHNrQK5FhU/HFr+/qb8hk2S5FMU0wG5BsVWIYW61z7Xt4ldjizET3U8ZiJZLYcym7nUt3jC29LgxtTcJUaxAophTzRedY+a+ATemq/dWidfgQODBnGh9BMjzOjcX5lDnCgGWzCeOBTC1rhA4agNeTJ27tvkU+1oJzETjXNtJpGFqbMjEJ/Yr6yKY7lnb1RjNclkKc+hommvB4cmzvJjaVghctQE/5kDTCoFhBSqDqakhk265LIc50vOiEd4XbemJYWpqbaNbLkti6mkSGvPlWX5MV8c2XwC8o+fG1DHX8uZZAcxYv1MG8Ji2ilKYGhoyWZbLspgadm176L4mB1O/R/IeO1lJwdTO2gYsy2VpTO2iViBmRTA1e5AUMH/MimC6A4RBG2Gmf7YKphsfGtroIPAtXfcfyoqK+eYgNCgAAAAASUVORK5CYII=" alt="" width="30px" />
              </div>
              <div className="content ">
                <h3 className="font-bold ml-4 text-xl">Individual</h3>
                <p className="text1 ml-4">Personal account to manage all your activities.</p>
              </div>
              <div className="arrow-icon">&nbsp; &nbsp; &rarr;</div>
            </div>
            <div className="business-rectangle border rounded-lg flex items-center p-6">
              <div className="icon">
               
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDmVkGtGkrhknmS8vNItMjskDPMCc3oFhJ7A&usqp=CAU" alt="" width="40px" />
              </div>
              <div className="content">
                <h3 className="font-bold ml-4 text-xl">Business</h3>
                <p className="text2 ml-4">Own or belong to a company, this is for you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sections;
