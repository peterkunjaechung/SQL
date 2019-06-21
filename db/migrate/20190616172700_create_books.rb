class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :genre
      t.boolean :available
      t.belongs_to :library, foreign_key: true

      t.timestamps
    end
  end
end
