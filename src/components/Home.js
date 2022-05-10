import React, { useEffect, useMemo } from 'react';
import { fetchProviders, fetchServices } from '../actions';
import { useDispatch, useSelector } from "react-redux";
import Services from './Services';
import Providers from './Providers';

const Home = () => {

    const dispatch = useDispatch();
    const { providers, services, selectedService } = useSelector((state) => state.home);

    useEffect(() => {
        dispatch(fetchServices());
        dispatch(fetchProviders());
        return () => true;
    }, [dispatch]);

    const filteredProfiles = useMemo(() => {
        if (providers) {
            if (!selectedService) {
                return providers.data
            }

            return providers.data.filter(provider => {
                const { subspecialties } = provider.attributes;
                return subspecialties.includes(selectedService);
            });
        } else {
            return [];
        }
    }, [providers, selectedService]);

    return (
        <div className='w-full h-screen m-0 p-1' >
            <div className='grid'>
                <div className='col-12 md:col-7' >
                    <Services data={services?.data} />
                </div>
                <div className='col-12 md:col-5'>
                    <Providers data={filteredProfiles} />
                </div>
            </div>
        </div>
    )
}
export default Home;