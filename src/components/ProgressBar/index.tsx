import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle, useDerivedValue } from 'react-native-reanimated';
import ReText from '../ReText';
import { styles } from "./styles";

type Props = {
    offsetY: SharedValue<number>;
    moveToTop: () => void
}

const ReTouchable = Animated.createAnimatedComponent(TouchableOpacity)

export function ProgressBar({ offsetY, moveToTop }: Props) {

    const animatedProgress = useAnimatedStyle(() => {
        return {
            width: `${offsetY.value}%`,
        };
    });

    const animatedContainerBar = useAnimatedStyle(() => {
        return {
            opacity: interpolate(offsetY.value, [0, 90, 100], [1, 1, 0], {
                extrapolateRight: Extrapolation.CLAMP,
                extrapolateLeft: Extrapolation.CLAMP
            }),
            width: `${interpolate(offsetY.value, [0, 90, 100], [100, 100, 0], {
                extrapolateRight: Extrapolation.CLAMP,
                extrapolateLeft: Extrapolation.CLAMP
            })}%`
        };
    });

    const animatedContainer = useAnimatedStyle(() => {
        return {
            width: interpolate(offsetY.value, [0, 90, 100], [200, 200, 56], {
                extrapolateRight: Extrapolation.CLAMP,
                extrapolateLeft: Extrapolation.CLAMP
            })
        };
    });

    const animatedButton = useAnimatedStyle(() => {
        return {
            opacity: interpolate(offsetY.value, [0, 90, 100], [0, 0, 1], {
                extrapolateRight: Extrapolation.CLAMP,
                extrapolateLeft: Extrapolation.CLAMP,
            }),
            width: `${interpolate(offsetY.value, [0, 90, 100], [0, 0, 100], {
                extrapolateRight: Extrapolation.CLAMP,
                extrapolateLeft: Extrapolation.CLAMP
            })}%`,
            transform: [{
                scale: interpolate(offsetY.value, [0, 90, 99, 100], [0, 0, 1.2, 1], {
                    extrapolateRight: Extrapolation.CLAMP,
                    extrapolateLeft: Extrapolation.CLAMP
                })
            }]
        };
    });

    const derivedText = useDerivedValue(() => {
        return `${offsetY.value.toFixed(0)}%`
    })


    return (
        <Animated.View style={[styles.container, animatedContainer]}>
            <ReTouchable style={[styles.button, animatedButton]} onPress={moveToTop}>
                <Feather name='arrow-up' size={24} color='#C4C4CC' />
            </ReTouchable>
            <Animated.View style={[{ flexDirection: 'row', alignItems: 'center' }, animatedContainerBar]}>
                <ReText text={derivedText} style={styles.value} />
                <Animated.View style={styles.tracker}>
                    <Animated.View style={[styles.progress, animatedProgress]} />
                </Animated.View>
            </Animated.View>

        </Animated.View >
    )
}