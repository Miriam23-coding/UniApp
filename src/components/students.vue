<script>
    export default {
        data () {
            return{
                students: [
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
    <div id = 'students'>
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
                                Students
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
                                        v-for="student in students" :key="student.id"
                                    
                                    >
                                        <td>{{ student.firstname }}</td>
                                        <td>{{ student.lastname }}</td>
                                        <td>{{ student.gender }}</td>
                                        <td>{{ student.email }}</td>
                                        <td>{{ student.phone }}</td>
                                       
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