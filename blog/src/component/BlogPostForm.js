import React,{useState} from 'react';
import {Text, View, TextInput, StyleSheet,Button} from 'react-native';

const BlogPostForm = ({onSubmit,initialValues}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] =useState(initialValues.content);
    return(
        <View>
            <Text style={styles.label}>Enter Title</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}/>
            <Text style={styles.label}>Enter Content</Text>
            <TextInput style={styles.input} value={content} onChangeText={(content)=> setContent(content)}/>
            <Button title="Save Blog Post"
            onPress={()=>onSubmit(title,content)}/>
        </View>
    );
};
BlogPostForm.defaultProps = {
    initialValues: {
        title:'',
        content:''
    }
}
const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        margin: 10
    },
    label: {
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 10
    }
});

export default BlogPostForm;