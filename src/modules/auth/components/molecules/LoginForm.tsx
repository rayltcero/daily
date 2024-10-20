import React from "react";
import { Input, FormLabel, Button } from "@/components/ui/atoms";
import { cn } from "@/lib/utils";
import { ViewAttributes } from 'react-nativescript';
import { CoreTypes, PropertyChangeData } from "@nativescript/core";
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {z} from 'zod';

const schema = z.object({
    username: z.string().min(3, 'Username must be at least 3 characters'),
    password: z.string().min(6, 'Password must be at least 6 characters')
});

interface LoginFormProps extends ViewAttributes {
    onSubmit: ({ username, password }) => void;
    isLoading?: boolean;
};

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, isLoading, className, ...viewAttributes }) => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            username: '',
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
            <FormLabel text="Username" />
            <Controller
                control={control}
                name="username"
                render={({ field, fieldState }) => (
                    <>
                        <Input
                            value={field.value}
                            onTextChange={(args: PropertyChangeData) => field.onChange(args.value)}
                            onBlur={field.onBlur}
                            placeholder="Username"
                            className={cn('mb-2', { "border-red-700 mb-1": fieldState.error })}
                            isEnabled={!isLoading}
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
                            isEnabled={!isLoading}
                        />
                        {fieldState.error && <label className="text-red-500 mb-6 text-xs" text={fieldState.error.message} textWrap={true} />}
                    </>
                )}
            />
            <Button
                content="Login"
                onTap={handleSubmit(onSubmit)}
                variant="primary"
                isLoading={isLoading}
            />
        </flexboxLayout>
    );
};
