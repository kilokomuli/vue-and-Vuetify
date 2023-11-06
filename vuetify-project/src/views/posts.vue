<script setup lang="ts">
import { ref } from 'vue';
const posts = ref ([
    {title: "Post 1", author: "Fred"},
    {title: "Post 2", author: "Emma"},
    {title: "Post 3", author: "Mike"},
    {title: "Post 4", author: "June"},
    {title: "Post 6", author: "Muli"},
    {title: "Post 7", author: "Kevin"},
    {title: "Post 8", author: "Ethan"},
    {title: "Post 9", author: "Kiloko"},
    {title: "Post 10", author: "Agnes"},
]);
</script>
<template>
    <div>
        <h2>Posts</h2>
        <v-table
        :height="300" 
        :fixed-header="true"
        :hover="true">
            <thead>
                <tr>
                    <th class="text-left">
                        Name
                    </th>
                    <th class="text-left">
                        Posts
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in posts" :key="item.title ">
                    <td>{{ item.title }}</td>
                    <td>{{ item.author }}</td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>