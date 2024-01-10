import React, { useState } from 'react'
import { Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import SliderComponent from './component/SliderComponent';
import InputField from './component/InputField';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
    // display: 'flex',
  }));
function Home() {
    const [aov,setAOV] = useState<number>(10)
    const [disputAndChargebacks,setDisputAndChargebacks] = useState<number>(10)
    const [customerAcquisitionCost,setCustomerAcquisitionCost] = useState<number>(10)
    const [shippingCost,setShippingCost] = useState<number>(10)
    const [productCost,setProductCost] = useState<number>(10)
    const [chargebackFee,setChargebackFee] = useState<number>(10)
    const [processingFee,setProcessingFee] = useState<number>(4)
    const [minutesChargeback,setMinutesChargeback] = useState<number>(30)
    const [averageChargeback,setAverageChargeback] = useState<number>(10)
    // =(E14*E13)+(E14*E15)+(E14*E16)+(E17*E13*E14)+(E18*E14)+(E13*E19*E14)+F20
    // =(disputAndChargebacks*aov)+(disputAndChargebacks*customerAcquisitionCost)
    // +(disputAndChargebacks*shippingCost)+(aov*productCost*disputAndChargebacks)
    // +(chargebackFee*disputAndChargebacks)+(aov+disputAndChargebacks+processingFee)+
    // ((minutesChargeback*disputAndChargebacks)/60)*20
    const AOV= (event:any,type:any)=>{
        // console.log('val',event.target.value)
        if(type ==='Blur' && event.target.value > 500){
            setAOV(500)
        }else{
            setAOV(event.target.value)
        }
    }
    const DisputAndChargebacks=(event:any,type:any)=>{
        if(type ==='Blur' && event.target.value > 500){
            setDisputAndChargebacks(500)
        }else{
            setDisputAndChargebacks(event.target.value)

        }
    }
    const CustomerAcquisitionCost = (event:any,type:any)=>{
        if(type ==='Blur' && event.target.value > 250){
            setCustomerAcquisitionCost(250)

        }else{
            setCustomerAcquisitionCost(event.target.value)

        }
    }
    const ShippingCost = (event:any,type:any)=>{
        if(type ==='Blur' && event.target.value > 50){
            setShippingCost(50)

        }else{
            setShippingCost(event.target.value)

        }
    }
    const ProductCost=(event:any,type:any)=>{
        if(type ==='Blur' && event.target.value > 50){
        setProductCost(50)

        }else{
            setProductCost(event.target.value)

        }
    }
    const ChargebackFee =(event:any,type:any)=>{
        if(type ==='Blur' && event.target.value > 100){
            setChargebackFee(100)

        }else{
            setChargebackFee(event.target.value)

        }
    }
    const ProcessingFee=(event:any,type:any)=>{
        if(type ==='Blur' && event.target.value > 8){
        setProcessingFee(8)

        }else{
            setProcessingFee(event.target.value)

        }
    }
    const MinutesChargeback=(event:any,type:any)=>{
        if(type ==='Blur' && event.target.value > 120){
        setMinutesChargeback(120)

        }else{
            setMinutesChargeback(event.target.value)

        }
    }
    const AverageChargeback=(event:any,type:any)=>{
        if(type ==='Blur' && event.target.value > 120){
        setAverageChargeback(100)

        }else{
            setAverageChargeback(event.target.value)

        }
    }

    let calulatedValue = Math.round((disputAndChargebacks*aov)
                           +(disputAndChargebacks*customerAcquisitionCost)
                            +(disputAndChargebacks*shippingCost)
                            +(aov*(productCost/100)*disputAndChargebacks)
                            +(chargebackFee*disputAndChargebacks)
                            +(aov*disputAndChargebacks*(processingFee/100))
                            +(((minutesChargeback*disputAndChargebacks)/60)*20))
    return (
        <Grid container spacing={2} style={{height:'600px'}}>
            <Grid item xs={7} style={{paddingLeft:'60px',height:'600px',overflow:'auto'}}>
            <Item>
                <Box>
                    <Box style={{display: 'flex'}}>
                        <Typography className='num'>1.</Typography> 
                        <Typography className='head'>Average Order Value</Typography>
                    </Box>
                    <Box style={{ marginTop:'20px',marginBottom:'20px',width:'100%',display: 'flex',justifyContent: 'center',flexDirection: 'row',alignItems: 'end'}}>
                        <Box style={{ width:'80%',paddingLeft:'20px'}}>
                            <SliderComponent value={aov} handleChange={AOV} start={'$0'} end={'$500'} min={0} max={500} strt={true} sign={'$'}/>
                        </Box>
                        <Box style={{ width:'20%'}}>
                            <InputField 
                            value={aov} 
                            onBlur={(e:any)=>AOV(e,'Blur')} 
                            onChange={AOV} 
                            start={true} 
                            sign={'$'}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box>
                <Box style={{display: 'flex'}}>
                        <Typography className='num'>2.</Typography> 
                        <Typography className='head'>Disputes and Chargebacks per month</Typography>
                    </Box>
                    <Box style={{marginTop:'20px',marginBottom:'20px', width:'100%',display: 'flex',justifyContent: 'center',flexDirection: 'row',alignItems: 'end'}}>
                        <Box style={{ width:'80%',paddingLeft:'20px'}}>
                            <SliderComponent value={disputAndChargebacks} handleChange={DisputAndChargebacks} start={'0'} end={'500'} min={0} max={500} sign={''}/>
                        </Box>
                        <Box style={{ width:'20%'}}>
                            <InputField 
                            value={disputAndChargebacks} 
                            onBlur={(e:any)=>DisputAndChargebacks(e,'Blur')} 
                            onChange={DisputAndChargebacks} 
                            start={true} 
                            sign={''}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box>
                <Box style={{display: 'flex'}}>
                        <Typography className='num'>3.</Typography> 
                        <Typography className='head'>Customer Acquisition Cost</Typography>
                    </Box>
                    <Box style={{marginTop:'20px',marginBottom:'20px', width:'100%',display: 'flex',justifyContent: 'center',flexDirection: 'row',alignItems: 'end'}}>
                        <Box style={{ width:'80%',paddingLeft:'20px'}}>
                            <SliderComponent value={customerAcquisitionCost} handleChange={CustomerAcquisitionCost} start={'$0'} end={'$250'} min={0} max={250} strt={true} sign={'$'}/>
                        </Box>
                        <Box style={{ width:'20%'}}>
                            <InputField 
                            value={customerAcquisitionCost} 
                            onBlur={(e:any)=>CustomerAcquisitionCost(e,'Blur')} 
                            onChange={CustomerAcquisitionCost} 
                            start={true} 
                            sign={'$'}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box>
                <Box style={{display: 'flex'}}>
                        <Typography className='num'>4.</Typography> 
                        <Typography className='head'>Shipping Cost (average)</Typography>
                    </Box>
                    <Box style={{ marginTop:'20px',marginBottom:'20px',width:'100%',display: 'flex',justifyContent: 'center',flexDirection: 'row',alignItems: 'end'}}>
                        <Box style={{ width:'80%',paddingLeft:'20px'}}>
                            <SliderComponent value={shippingCost} handleChange={ShippingCost} start={'$0'} end={'$50'} min={0} max={50} strt={true} sign={'$'}/>
                        </Box>
                        <Box style={{ width:'20%'}}>
                            <InputField 
                            value={shippingCost} 
                            onBlur={(e:any)=>ShippingCost(e,'Blur')} 
                            onChange={ShippingCost} 
                            start={true} 
                            sign={'$'}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box>
                <Box style={{display: 'flex'}}>
                        <Typography className='num'>5.</Typography> 
                        <Typography className='head'>Product Cost (% of AOV)</Typography>
                    </Box>
                    <Box style={{ marginTop:'20px',marginBottom:'20px',width:'100%',display: 'flex',justifyContent: 'center',flexDirection: 'row',alignItems: 'end'}}>
                        <Box style={{ width:'80%',paddingLeft:'20px'}}>
                            <SliderComponent value={productCost} handleChange={ProductCost} start={'0%'} end={'50%'} min={0} max={50} strt={false} sign={'%'}/>
                        </Box>
                        <Box style={{ width:'20%'}}>
                            <InputField 
                            value={productCost} 
                            onBlur={(e:any)=>ProductCost(e,'Blur')} 
                            onChange={ProductCost} 
                            start={false} 
                            sign={'%'}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Box style={{display: 'flex'}}>
                        <Typography className='num'>6.</Typography> 
                        <Typography className='head'>Chargeback Fee</Typography>
                    </Box>
                    <Box style={{ marginTop:'20px',marginBottom:'20px',width:'100%',display: 'flex',justifyContent: 'center',flexDirection: 'row',alignItems: 'end'}}>
                        <Box style={{ width:'80%',paddingLeft:'20px'}}>
                            <SliderComponent value={chargebackFee} handleChange={ChargebackFee} start={'$0'} end={'$100'} min={0} max={100} strt={true} sign={'$'}/>
                        </Box>
                        <Box style={{ width:'20%'}}>
                            <InputField 
                            value={chargebackFee} 
                            onBlur={(e:any)=>ChargebackFee(e,'Blur')} 
                            onChange={ChargebackFee} 
                            start={true} 
                            sign={'$'}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Box style={{display: 'flex'}}>
                        <Typography className='num'>7.</Typography> 
                        <Typography className='head'>Processing Fee</Typography>
                    </Box>
                    <Box style={{ marginTop:'20px',marginBottom:'20px',width:'100%',display: 'flex',justifyContent: 'center',flexDirection: 'row',alignItems: 'end'}}>
                        <Box style={{ width:'80%',paddingLeft:'20px'}}>
                            <SliderComponent value={processingFee} handleChange={ProcessingFee} start={'0%'} end={'8%'} min={0} max={8} strt={false} sign={'%'}/>
                        </Box>
                        <Box style={{ width:'20%'}}>
                            <InputField 
                            value={processingFee} 
                            onBlur={(e:any)=>ProcessingFee(e,'Blur')} 
                            onChange={ProcessingFee} 
                            start={false} 
                            sign={'%'}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Box style={{display: 'flex'}}>
                        <Typography className='num'>8.</Typography> 
                        <Typography className='head'>Minutes to answer a Chargeback</Typography>
                    </Box>
                    <Box style={{ marginTop:'20px',marginBottom:'20px',width:'100%',display: 'flex',justifyContent: 'center',flexDirection: 'row',alignItems: 'end'}}>
                        <Box style={{ width:'80%',paddingLeft:'20px'}}>
                            <SliderComponent value={minutesChargeback} handleChange={MinutesChargeback} start={'20'} end={'120'} min={20} max={120} sign={''}/>
                        </Box>
                        <Box style={{ width:'20%'}}>
                            <InputField 
                            value={minutesChargeback} 
                            onBlur={(e:any)=>MinutesChargeback(e,'Blur')} 
                            onChange={MinutesChargeback} 
                            start={true} 
                            sign={''}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Box style={{display: 'flex'}}>
                        <Typography className='num'>9.</Typography> 
                        <Typography className='head'>Average chargeback Win-Rate</Typography>
                    </Box>
                    <Box style={{ marginTop:'20px',marginBottom:'20px',width:'100%',display: 'flex',justifyContent: 'center',flexDirection: 'row',alignItems: 'end'}}>
                        <Box style={{ width:'80%',paddingLeft:'20px'}}>
                            <SliderComponent value={averageChargeback} handleChange={AverageChargeback} start={'0%'} end={'100%'} min={0} max={100} strt={false} sign={'%'}/>
                        </Box>
                        <Box style={{ width:'20%'}}>
                            <InputField 
                              value={averageChargeback} 
                              onBlur={(e:any)=>AverageChargeback(e,'Blur')} 
                              start={false} 
                              sign={'%'}
                              onChange={AverageChargeback}
                              />
                            </Box>
                    </Box>
                </Box>
                </Item>

            </Grid>
            <Grid item xs={5}>
                <Item>
                <Box style={{marginBottom:'15px'}}>
                    <Typography style={{color:'#393838',fontSize:'20px'}}>Your True Profit Loss to Chargebacks & Disputes</Typography>
                </Box>
                <Box style={{display:'flex',width:'100%',fontSize:'18px',padding:'20px 0px 0 0px'}}>
                    <Typography style={{display:'flex',color:'#393838',paddingLeft:'10px',fontWeight:'400',width:'70%',fontSize:'14px',textAlign:'left',wordBreak:'break-word'}}>Current Monthly 
                    <b style={{marginLeft:'3px',marginRight:'3px'}}>True Profit Loss</b>
                    to Chargebacks
                    </Typography>
                    
                    <Typography style={{width:'30%',fontSize:'23px',fontWeight:'700',color:'rgb(184, 49, 47)'}}>
                        -${Math.round(calulatedValue - ((averageChargeback/100)*calulatedValue))}
                    </Typography>
                </Box>
                <Box style={{display:'flex',width:'100%',padding:'20px 0px 0 0px',fontSize:'18px'}}>
                    <Typography style={{display:'flex',color:'#393838',paddingLeft:'10px',fontWeight:'400',width:'70%',fontSize:'14px',textAlign:'left',wordBreak:'break-word'}}>Current Yearly 
                    <b style={{marginLeft:'3px',marginRight:'3px'}}>True Profit Loss</b> to Chargebacks</Typography>
                    <Typography style={{width:'30%',fontSize:'23px',fontWeight:'700',color:'rgb(184, 49, 47)'}}>-$123123</Typography>
                </Box>
                <Box style={{display:'flex',width:'100%',padding:'20px 0px 0 0px',fontSize:'18px'}}>
                    <Typography style={{display:'flex',color:'#393838',paddingLeft:'10px',fontWeight:'400',width:'70%',fontSize:'14px',textAlign:'left',wordBreak:'break-word'}}>Additional Monthly <b style={{marginLeft:'3px',marginRight:'3px'}}>Profit</b> with Chargeflow</Typography>
                    <Typography style={{width:'30%',fontSize:'23px',fontWeight:'700',color:'rgb(65, 168, 95)'}}>$123123</Typography>
                </Box>
                <Box style={{display:'flex',width:'100%',padding:'20px 0px 0 0px',fontSize:'18px'}}>
                    <Typography style={{display:'flex',color:'#393838',paddingLeft:'10px',fontWeight:'400',width:'70%',fontSize:'14px',textAlign:'left',wordBreak:'break-word'}}>Additional Yearly <b style={{marginLeft:'3px',marginRight:'3px'}}>Profit</b> with Chargeflow</Typography>
                    <Typography style={{width:'30%',fontSize:'23px',fontWeight:'700',color:'rgb(65, 168, 95)'}}>$123123</Typography>
                </Box>
                </Item>
            </Grid>
        </Grid>
    )
}

export default Home