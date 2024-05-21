import React from 'react';
import ic_pro_tag from '../assets/Images/ic_pro_tag.svg'
import ic_monthly_plan from '../assets/Images/ic_monthly_plan.svg'
import ic_content_solid_dot from '../assets/Images/ic_content_solid_dot.svg'
import ic_plan_benifits from '../assets/Images/ic_plan_benifits.svg'
import ic_yearly_plan from '../assets/Images/ic_yearly_plan.svg'

function PlansComponent() {
  return (
    <main className="style_main__UY2kE">
      <div>
        <div className="style_plans__Iniqa style_plansMargin__Z_5I5" id="plan">
          <div className="agTitleMiddle style_title__LSDQ9">
            <h1 className="agTitleMiddle">Please choose the plan that best suits your needs</h1>
            <img alt="pro" loading="lazy" width="50" height="26.5" decoding="async" data-nimg="1" style={{color: 'transparent'}} src={ic_pro_tag} />
          </div>
          <p className="ag18 style_notice__d2HFk">The following additional services are available for all Pro users</p>
          <div className="ag14-t style_policy__EuRL_">
            <div><span>️️️⚡️ high-speed GPU pool</span></div>
            <div className="style_divider__7Lvuh"></div>
            <div><span>🥳 unlimited executions for the same task</span></div>
            <div className="style_divider__7Lvuh"></div>
            <div><span>🎉 up to 48 images simultaneously</span></div>
            <div className="style_divider__7Lvuh"></div>
            <div><span>💥 up to 2048 px</span></div>
            <div className="style_divider__7Lvuh"></div>
            <div><span>👑 full-size image</span></div>
            <div className="style_divider__7Lvuh"></div>
            <div><span>🔥 commercial use</span></div>
            <div className="style_divider__7Lvuh"></div>
          </div>
          <div className="style_planList__F2Smg">
            <div className="style_monthPlan__mKO7H">
              <div className="ag14-t style_planHeader__nhLSX">
                <img alt="monthly" loading="lazy" width="18" height="18" decoding="async" data-nimg="1" src={ic_monthly_plan} style={{color: 'transparent'}} />
                <p className="style_planTitle__JeByC">Monthly Subscription Plan</p>
              </div>
              <div className="style_plansContent__QPQRz">
                <div className="style_planContent__TwONa">
                  <div className="ag18 style_planPrice__VU7xF">
                    <p className="ag40 style_price__o2OGn">$9.99</p><span> /</span><span>Month</span>
                  </div>
                  <p className="ag12 undefined">Benefits upon payment</p>
                  <div className="style_planRights__rJZfR ag14">
                    <div className="style_planRight__epB3c"><img alt="index" loading="lazy" width="10" height="20" decoding="async" data-nimg="1" src={ic_content_solid_dot} style={{color: 'transparent'}} /><span>3,000 points ($0.0333 per image in high-speed)</span></div>
                    <div className="style_planRight__epB3c"><img alt="index" loading="lazy" width="10" height="20" decoding="async" data-nimg="1" src={ic_content_solid_dot} style={{color: 'transparent'}} /><span>Unused points carry over for auto-renewal</span></div>
                    <div className="style_planRight__epB3c"><img alt="index" loading="lazy" width="10" height="20" decoding="async" data-nimg="1" src={ic_content_solid_dot} style={{color: 'transparent'}} /><span>Points reset to zero upon auto-renewal cancellation</span></div>
                  </div>
                  <div className="style_planPay___D_u1"><button className="style_button__S6JFm style_primary__U52fV undefined" style={{fontSize: '16px', fontWeight: '500', lineHeight: '26px', borderRadius: '10px'}}>Purchase</button></div>
                  <div className="ag12-t style_popular__Z_ojO">Most Popular</div>
                </div>
              </div>
            </div>
            <div className="style_yearPlan__UOM5e">
              <div className="ag14-t style_planHeader__nhLSX">
                <img alt="yearly" loading="lazy" width="18" height="18" decoding="async" data-nimg="1" src={ic_yearly_plan} style={{color: 'transparent'}} />
                <div className="style_planTitle__JeByC">Points Package</div>
              </div>
              <div className="style_plansContent__QPQRz">
                <div className="style_planContent__TwONa">
                  <div className="ag18 style_planPrice__VU7xF">
                    <p className="ag40 style_price__o2OGn">$49</p>
                  </div>
                  <p className="ag12 undefined">Benefits upon payment</p>
                  <div className="style_planRights__rJZfR ag14">
                    <div className="style_planRight__epB3c"><img alt="index" loading="lazy" width="10" height="20" decoding="async" data-nimg="1" src={ic_content_solid_dot} style={{color: 'transparent'}} /><span>15,000 points ($0.0327 per image in high-speed)</span></div>
                    <div className="style_planRight__epB3c"><img alt="index" loading="lazy" width="10" height="20" decoding="async" data-nimg="1" src={ic_content_solid_dot} style={{color: 'transparent'}} /><span>Points valid for one year</span></div>
                  </div>
                  <div className="style_planPay___D_u1"><button className="style_button__S6JFm style_primary__U52fV undefined" style={{fontSize: '16px', fontWeight: '500', lineHeight: '26px', borderRadius: '10px'}}>Purchase</button></div>
                </div>
                <div className="style_planContent__TwONa">
                  <div className="ag18 style_planPrice__VU7xF">
                    <p className="ag40 style_price__o2OGn">$99</p>
                  </div>
                  <p className="ag12 undefined">Benefits upon payment</p>
                  <div className="style_planRights__rJZfR ag14">
                    <div className="style_planRight__epB3c"><img alt="index" loading="lazy" width="10" height="20" decoding="async" data-nimg="1" src={ic_content_solid_dot} style={{color: 'transparent'}} /><span>36,000 points ($0.0275 per image in high-speed)</span></div>
                    <div className="style_planRight__epB3c"><img alt="index" loading="lazy" width="10" height="20" decoding="async" data-nimg="1" src={ic_content_solid_dot} style={{color: 'transparent'}} /><span>Points valid for one year</span></div>
                  </div>
                  <div className="style_planPay___D_u1"><button className="style_button__S6JFm style_primary__U52fV undefined" style={{fontSize: '16px', fontWeight: '500', lineHeight: '26px', borderRadius: '10px'}}>Purchase</button></div>
                </div>
                <div className="style_planContent__TwONa">
                  <div className="ag18 style_planPrice__VU7xF">
                    <p className="ag40 style_price__o2OGn">$399</p>
                  </div>
                  <p className="ag12 undefined">Benefits upon payment</p>
                  <div className="style_planRights__rJZfR ag14">
                    <div className="style_planRight__epB3c"><img alt="index" loading="lazy" width="10" height="20" decoding="async" data-nimg="1" src={ic_content_solid_dot} style={{color: 'transparent'}} /><span>160,000 points ($0.0249 per image in high-speed)</span></div>
                    <div className="style_planRight__epB3c"><img alt="index" loading="lazy" width="10" height="20" decoding="async" data-nimg="1" src={ic_content_solid_dot} style={{color: 'transparent'}} /><span>Points valid for one year</span></div>
                  </div>
                  <div className="style_planPay___D_u1"><button className="style_button__S6JFm style_primary__U52fV undefined" style={{fontSize: '16px', fontWeight: '500', lineHeight: '26px', borderRadius: '10px'}}>Purchase</button></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="style_edition__zYLYD">
          <div className="style_container__8n1GE">
            <div className="style_wrap__jqBIb">
              <div className="style_leftContainer__QbggH">
                <div className="agTitleMiddle style_lefTitle__AsqHz">Enterprise</div>
                <div className="ag18 style_leftSubTitle__qwXUh">Customized services based on individual needs, the team is committed to deeply understanding your needs and providing you with the best service.</div>
                <div className="style_constract__ggHIH"><button className="style_button__S6JFm style_primary__U52fV undefined" style={{fontSize: '16px', fontWeight: '500', lineHeight: '26px'}}>Contact us</button></div>
              </div>
              <div className="style_rightContainer__JAkfz">
                <div className="style_planItem__QHsxm">
                  <div className="ag24-t">Enterprise Plan</div>
                  <div className="ag20-t style_planPrice__VB2b5"><p className="ag40 style_price__MyJsz">Starts at $50k</p><span> /</span><span>Yearly</span></div>
                  <div className="style_rights__otSCb ag14">
                    <div className="style_right__vZtsu"><img alt="benifit" loading="lazy" width="14" height="20" decoding="async" data-nimg="1" className="style_rightIcon__vnVVg" src={ic_plan_benifits} style={{color: 'transparent'}} /><span>Al Computing Points: 1,000,000 (Top-up at $2 for 1,000) Credits)</span></div>
                    <div className="style_right__vZtsu"><img alt="benifit" loading="lazy" width="14" height="20" decoding="async" data-nimg="1" className="style_rightIcon__vnVVg" src={ic_plan_benifits} style={{color: 'transparent'}} /><span>Enjoy full access to all API benefits</span></div>
                    <div className="style_right__vZtsu"><img alt="benifit" loading="lazy" width="14" height="20" decoding="async" data-nimg="1" className="style_rightIcon__vnVVg" src={ic_plan_benifits} style={{color: 'transparent'}} /><span>Private domain workspace for data security and safety</span></div>
                    <div className="style_right__vZtsu"><img alt="benifit" loading="lazy" width="14" height="20" decoding="async" data-nimg="1" className="style_rightIcon__vnVVg" src={ic_plan_benifits} style={{color: 'transparent'}} /><span>Support team collaboration</span></div>
                    <div className="style_right__vZtsu"><img alt="benifit" loading="lazy" width="14" height="20" decoding="async" data-nimg="1" className="style_rightIcon__vnVVg" src={ic_plan_benifits} style={{color: 'transparent'}} /><span>Exclusive model training</span></div>
                    <div className="style_right__vZtsu"><img alt="benifit" loading="lazy" width="14" height="20" decoding="async" data-nimg="1" className="style_rightIcon__vnVVg" src={ic_plan_benifits} style={{color: 'transparent'}} /><span>AI image generation services</span></div>
                    <div className="style_right__vZtsu"><img alt="benifit" loading="lazy" width="14" height="20" decoding="async" data-nimg="1" className="style_rightIcon__vnVVg" src={ic_plan_benifits} style={{color: 'transparent'}} /><span>Digital human model training</span></div>
                    <div className="style_right__vZtsu"><img alt="benifit" loading="lazy" width="14" height="20" decoding="async" data-nimg="1" className="style_rightIcon__vnVVg" src={ic_plan_benifits} style={{color: 'transparent'}} /><span>Additional customization requests</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="style_mainContent__azwLy">
        <div className="style_container__2lUo8" style={{padding:0,height:'auto',maxWidth:765}}>
          <div className="agTitleMiddle">Contact Us</div>
          <div className="style_subTitle__10wwa ag18">
            If you have any issues using our product or are interested in collaborations/partnerships, please email us at
            <a href="mailto:hi@weshop.ai"><span className="style_link__qfWXI">hi@weshop.ai</span></a>.
            <br /><br />
            Provide details and screenshots of any problems to help our team resolve them faster. We'll respond as soon as possible.
          </div>
        </div>
      </div>
    </main>
  );
}

export default PlansComponent;
