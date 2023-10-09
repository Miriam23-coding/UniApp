<script>
    export default {
        data () {
            return{
                Lecturers: [
                    {
                        firstname: 'John',
                        lastname: 'Richard',
                        gender:'male',
                        email:'jrich@gmail.com',
                        phone:'254756873928'
                    },
                    {
                        firstname: 'Tom',
                        lastname: 'Rich',
                        gender:'male',
                        email:'trich@gmail.com',
                        phone:'254799873928'
                    },
                    {
                        firstname: 'Miriam',
                        lastname: 'Neno',
                        gender:'female',
                        email:'neno@gmail.com',
                        phone:'254750073928'
                    },
                    {
                        firstname: 'Joy',
                        lastname: 'Muli',
                        gender:'female',
                        email:'muli@gmail.com',
                        phone:'254750973928'
                    },
                    {
                        firstname: 'Ron',
                        lastname: 'Rard',
                        gender:'male',
                        email:'ron@gmail.com',
                        phone:'254666873928'
                    }
                    
                ]
            }
        }
    }

</script>
<template>
    <div id = 'lecturers'>
        <v-container>
            <v-container>
                <v-layout column>
                    <v-card
                        class="mx-auto"
                        
                    >
                    <v-toolbar
                            color="teal"
                            theme="dark"
                        >
                            <v-toolbar-title class="text-h6">
                                Lecturers
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-container>
                             <v-table>
                                    <thead>
                                    <tr>
                                        <th class="text-left">Firstname</th>
                                        <th class="text-left"> Lastname</th>
                                        <th class="text-left"> Gender</th>
                                        <th class="text-left"> Email</th>
                                        <th class="text-left"> Phone</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr
                                        v-for="lecturer in Lecturers" :key="lecturer.id"
                                    
                                    >
                                        <td>{{ lecturer.firstname }}</td>
                                        <td>{{ lecturer.lastname }}</td>
                                        <td>{{ lecturer.gender }}</td>
                                        <td>{{ lecturer.email }}</td>
                                        <td>{{ lecturer.phone }}</td>
                                       
                                    </tr>
                                    </tbody>
                                </v-table>
                            
                            </v-container>
                
                        <v-divider></v-divider>
                    </v-card>
                    </v-layout>
             </v-container>
        </v-container>
        </div>



                
</template>