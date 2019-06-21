class CreateLogs < ActiveRecord::Migration[5.2]
  def change
    create_table :logs do |t|
      t.belongs_to :customer, foreign_key: true
      t.belongs_to :book, foreign_key: true

      t.timestamps
    end
  end
end
