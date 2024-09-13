import React from "react";
import { Input, FormLabel, Button } from "@/components/ui/atoms";
import { cn } from "@/utils/cn";
import { ViewAttributes } from 'react-nativescript';
import { CoreTypes, PropertyChangeData } from "@nativescript/core";
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from 'zod';
import { phoneRegex } from "../../utils";

const schema = z.object({
    phone: z.string().min(10).max(10).regex(phoneRegex, 'Invalid phone number'),
    password: z.string().min(6, 'Password must be at least 6 characters')
});

interface LoginFormProps extends ViewAttributes {
    onSubmit: ({ phone, password }) => void;
};

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, className, ...viewAttributes }) => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            phone: '',
            password: ''
        },
        resolver: zodResolver(schema)
    });

    const localClassName = cn("flex-col", className);

    return (
        <flexboxLayout
            className={localClassName}
            {...viewAttributes}
        >
            <FormLabel text="Phone" />
            <Controller
                control={control}
                name="phone"
                render={({ field, fieldState }) => (
                    <>
                        <Input
                            value={field.value}
                            onTextChange={(args: PropertyChangeData) => field.onChange(args.value)}
                            onBlur={field.onBlur}
                            placeholder="Phone"
                            className={cn('mb-2', { "border-red-700 mb-1": fieldState.error })}
                            keyboardType={CoreTypes.KeyboardType.phone}
                        />
                        {fieldState.error && <label className="text-red-700 mb-2 text-xs" text={fieldState.error.message} textWrap={true} />}
                    </>
                )}
            />
            <FormLabel text="Password" />
            <Controller
                control={control}
                name="password"
                render={({ field, fieldState }) => (
                    <>
                        <Input
                            value={field.value}
                            onTextChange={(args: PropertyChangeData) => field.onChange(args.value)}
                            onBlur={field.onBlur}
                            placeholder="Password"
                            className={cn('mb-6', { "border-red-700 mb-1": fieldState.error })}
                            secure={true}
                        />
                        {fieldState.error && <label className="text-red-500 mb-6 text-xs" text={fieldState.error.message} textWrap={true} />}
                    </>
                )}
            />
            <Button
                content="Login"
                onTap={handleSubmit(onSubmit)}
                variant="primary"
            />
        </flexboxLayout>
    );
};
