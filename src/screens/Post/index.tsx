import { useRef } from 'react'

import { View, Text } from "react-native";
import Animated, { Extrapolation, interpolate, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { ProgressBar } from "../../components/ProgressBar";
import { styles } from "./styles";


export function Post() {

    const scrollOffset = useSharedValue(0);
    const scrollRef = useRef<Animated.ScrollView>(null);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollOffset.value = interpolate(
                Math.ceil(event.contentOffset.y + event.layoutMeasurement.height),
                [
                    Math.ceil(event.layoutMeasurement.height),
                    Math.ceil(event.contentSize.height)
                ],
                [0, 100],
                {
                    extrapolateRight: Extrapolation.CLAMP,
                    extrapolateLeft: Extrapolation.CLAMP
                }
            );
        },
    });

    function handleOnTop() {
        scrollRef.current?.scrollTo({
            x: 0,
            animated: true
        });
    }

    return (
        <View style={styles.container}>
            <Animated.ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
                onScroll={scrollHandler}
                ref={scrollRef}
            >
                <Text style={styles.title}>
                    Lorem ipsum
                </Text>
                <View>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nemo tenetur est beatae quis quisquam distinctio fugiat excepturi eos molestiae sunt error, inventore provident impedit quas voluptates? Illo, ad. Ipsum?
                    </Text>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nemo tenetur est beatae quis quisquam distinctio fugiat excepturi eos molestiae sunt error, inventore provident impedit quas voluptates? Illo, ad. Ipsum?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti facilis optio quo impedit similique ex sapiente maiores, voluptas illum quibusdam repudiandae debitis illo obcaecati? Voluptas fuga nihil voluptatum ut provident!
                    </Text>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nemo tenetur est beatae quis quisquam distinctio fugiat excepturi eos molestiae sunt error, inventore provident impedit quas voluptates? Illo, ad. Ipsum?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti facilis optio quo impedit similique ex sapiente maiores, voluptas illum quibusdam repudiandae debitis illo obcaecati? Voluptas fuga nihil voluptatum ut provident!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis saepe adipisci magni vel iusto. Facilis recusandae nesciunt, quae laborum eligendi libero assumenda omnis ipsa fugiat autem vero vitae, repellendus eveniet.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat modi sunt, qui odio molestiae non velit repellendus eius asperiores cum hic rem provident laboriosam corrupti quidem, rerum nihil adipisci quisquam!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, eaque, neque perferendis labore minima non ducimus delectus, deserunt veritatis necessitatibus iste debitis quis laborum libero. Quas quos animi eos saepe?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, minima molestias optio voluptatibus atque error cumque officiis id totam quasi quis, iste reiciendis, vero perspiciatis fuga cum doloribus facere et.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia porro, illum quos odit iste corporis provident tempore dicta sapiente tempora suscipit ipsum possimus placeat doloremque optio molestiae iure deserunt neque?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non exercitationem quos inventore atque iusto fugiat optio aliquid expedita hic vero quo temporibus, nostrum ratione. Temporibus modi illum iste soluta mollitia!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis autem fugit rerum in mollitia ea, aspernatur quae quo cum accusantium molestias nemo iste corrupti alias impedit nulla modi earum beatae.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, officiis sequi temporibus consequuntur doloremque debitis cupiditate cumque reiciendis, impedit iste illo eum id aut non distinctio voluptas quas ullam explicabo.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repudiandae explicabo similique laboriosam debitis temporibus accusantium, harum facilis? Error nisi optio impedit est iure quo pariatur accusamus dolores aliquam alias.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae nobis et rem commodi similique minima voluptas ex mollitia. Omnis, sint? Accusamus quod nihil reiciendis. At quam numquam sint iste laudantium.
                    </Text>
                </View>
            </Animated.ScrollView>
            <ProgressBar offsetY={scrollOffset} moveToTop={handleOnTop} />
        </View >
    )
}