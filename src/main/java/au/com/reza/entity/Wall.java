package au.com.reza.entity;

import java.io.Serializable;

public class Wall implements Serializable {

	private static final long serialVersionUID = 1L;

	private String comment;

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

}
