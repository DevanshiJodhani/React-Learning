import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyinfo'
import {InputBox} from './componets/index.js'

function App() {
  const [amount, setAmount] = useState()
  const [from, steFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState()

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    steFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage:`url(https://cdn4.vectorstock.com/i/1000x1000/64/43/infographic-currency-chart-on-blue-background-vector-28546443.jpg)`}}>

      {/* https://cdn4.vectorstock.com/i/1000x1000/64/43/infographic-currency-chart-on-blue-background-vector-28546443.jpg */}

      <div className='w-full'>

        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}>
            <div className='w-full mb-1'>
              <InputBox
              label="from"
              amount={amount}
              currencyOption={options}
              onCurrencyChange={(currency) => steFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}
              selectedCurrency={from}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
              onClick={swap}>Swap</button>
            </div>
            <div className='w-full mb-1'>
              <InputBox 
              label="to"
              currencyOption={options}
              amount={convertedAmount}
              onCurrencyChange={(currency) => setTo(currency)}
              selectedCurrency={to}
              amountDisabled
              />
            </div>
            <button 
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            type='submit'>
            Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>

        </div>

      </div>

    </div>
  )
}

export default App
