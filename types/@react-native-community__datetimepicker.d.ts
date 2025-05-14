declare module '@react-native-community/datetimepicker' {
  import * as React from 'react';
  import { ViewProps } from 'react-native';

  export interface DateTimePickerProps extends ViewProps {
    value: Date;
    mode?: 'date' | 'time' | 'datetime';
    display?: 'default' | 'spinner' | 'calendar' | 'clock';
    onChange: (event: any, date?: Date) => void;
    minimumDate?: Date;
    maximumDate?: Date;
    is24Hour?: boolean;
  }

  const DateTimePicker: React.FC<DateTimePickerProps>;
  export default DateTimePicker;
}
