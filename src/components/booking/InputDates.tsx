import React, {useEffect} from "react";

interface DateProps {
    checkInDate: string;
    checkOutDate: string;
    nextButtonDisabled: boolean;
    setCheckInDate: (date: string) => void;
    setCheckOutDate: (date: string) => void;
    setNextButtonDisabled: (disabled: boolean) => void;
    setDays: (days: number) => void;
}

export const InputDates = (props: DateProps) => {

    const handleSetNextButtonDisabled = (): void => {
        if (props.checkOutDate.trim() == "" || props.checkInDate.trim() == "") {
            props.setNextButtonDisabled(true);
            return;
        }
        const dateFrom: Date = new Date(props.checkInDate);
        const dateTo: Date = new Date(props.checkOutDate);
        props.setNextButtonDisabled(dateTo < dateFrom);
    }

    const handleDays = (): void => {
        const dateFrom: Date = new Date(props.checkInDate);
        const dateTo: Date = new Date(props.checkOutDate);
        const days: number = (dateTo.getTime() - dateFrom.getTime()) / (1000 * 3600 * 24);

        props.setDays(days);
    }

    useEffect((): void => {
        handleSetNextButtonDisabled();
    }, [props.checkInDate, props.checkOutDate]);

    useEffect((): void => {
        handleDays();
    }, [props.checkInDate, props.checkOutDate]);

    return (
        <>
            <div style={{'marginBottom': '10px'}}>Step 2: Select check-in and check-out dates</div>
            <div>
                <div>
                    <div className="label">
                        <label>Check In Date:</label>
                    </div>
                    <div>
                        <input
                            className="input-booking"
                            style={{'width': '200px'}}
                            type="date"
                            value={props.checkInDate}
                            onChange={(e) => props.setCheckInDate(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <div className="label">
                        <label>Check Out Date:</label>
                    </div>
                    <div>
                        <input
                            style={{'width': '200px'}}
                            className="input-booking"
                            type="date"
                            value={props.checkOutDate}
                            onChange={(e) => props.setCheckOutDate(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            {props.nextButtonDisabled && <div className="invalid-data">Invalid dates</div>}
        </>
    )
}