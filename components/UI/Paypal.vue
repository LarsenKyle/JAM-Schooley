<v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">
          My Cart
        </v-card-title>
        <v-card-text>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    Item
                  </th>
                  <th class="text-left">
                    Qty
                  </th>
                  <th class="text-left">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in items" :key="item.title">
                  <td>{{ item.title }}</td>
                  <td>{{ item.qty }}</td>
                  <td>${{ item.price }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Proceed to checkout
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
