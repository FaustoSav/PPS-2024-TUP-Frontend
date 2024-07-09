import { CheckoutSummary } from '../components/Cart/Checkout/CheckoutSummary';
import { CheckoutForm } from '../components/Forms/Checkout/CheckoutForm';
import { Subtitle } from '../components/shared/Subtitle';

export const Checkout = () => {
  return (
    <div className='py-12 flex items-center justify-center flex-col bg-light-dark '>
      <Subtitle text={'Checkout'}/>
      <div className='flex gap-10 justify-center items-start'>
      <CheckoutForm />
      <CheckoutSummary/>
      </div>
      
    </div>
  );
};
