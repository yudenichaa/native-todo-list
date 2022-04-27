import { Switch as NativeSwitch, SwitchProps } from 'react-native';

export function Switch({ value, ...props }: SwitchProps) {
  return (
    <NativeSwitch
      trackColor={{ false: '#cecece', true: '#b8b8b8' }}
      thumbColor={value ? '#1890ff' : '#ebebeb'}
      ios_backgroundColor="#b8b8b8"
      value={value}
      {...props}
    />
  );
}
